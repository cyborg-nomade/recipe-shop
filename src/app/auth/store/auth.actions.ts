import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] LOGIN_START';
export const SIGNUP_START = '[Auth] SIGNUP_START';
export const AUTO_LOGIN = '[Auth] AUTO_LOGIN';
export const AUTHENTICATE_SUCCESS = '[Auth] AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAIL = '[Auth] AUTHENTICATE_FAIL';
export const LOGOUT = '[Auth] LOGOUT';
export const CLEAR_ERROR = '[Auth] CLEAR_ERROR';

export class SignUpStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;

  constructor() {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor() {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;

  constructor() {}
}

export type AuthActions =
  | LoginStart
  | AutoLogin
  | SignUpStart
  | AuthenticateSuccess
  | AuthenticateFail
  | Logout
  | ClearError;
