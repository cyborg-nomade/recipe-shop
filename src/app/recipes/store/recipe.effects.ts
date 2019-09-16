import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as alias from 'actions';
//import all requried services or any dependencies

@Injectable()
export class NameEffects {
  constructor(private action$: Actions) {}

  @Effect()
  effectName$ = this.action$.ofType(aliasACTION_TYPE).pipe(
    switchMap(() => {
      /*return this.myService().pipe(
        map(data => data),
        catchError(error => of(error))
        //dispatch action with payload in `map`
        //dispatch action with error in `catchError`
      );*/
    })
  );
}
