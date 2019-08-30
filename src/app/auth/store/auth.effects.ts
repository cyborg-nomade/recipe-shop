import { /* Observable, */ of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
/* import { Action } from '@ngrx/store'; */
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { environment } from '../../../environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin$ /*: Observable<Action> TODO: check how to get this type to work */ = this.action$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
            environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          }
        )
        .pipe(
          map(resData => {
            const expirationDate = new Date(
              new Date().getTime() + +resData.expiresIn * 1000
            );
            return new AuthActions.Login({
              email: resData.email,
              userId: resData.localId,
              token: resData.idToken,
              expirationDate
            });
          }),
          catchError(errorRes => {
            let errorMessage = 'An unknown error has occurred.';
            if (!errorRes.error || !errorRes.error.error) {
              return of(new AuthActions.LoginFail(errorMessage));
            }
            switch (errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'Invalid password or e-mail';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password or e-mail';
                break;
              case 'USER_DISABLED':
                errorMessage =
                  'This user has been suspended by the administrator';
                break;
            }
            return of(new AuthActions.LoginFail(errorMessage));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  authSuccess$ = this.action$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/recipes']);
    })
  );

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
