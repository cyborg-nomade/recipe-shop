import { Action } from '@ngrx/store';

export const ACTION_CONST = 'ACTION_CONST';
export const ACTION_CONST_SUCCESS = 'ACTION_CONST SUCCESS';
export const ACTION_CONST_FAIL = 'ACTION_CONST FAIL';

export class LoadActionCreator implements Action {
  readonly type = ACTION_CONST;
}

export class LoadActionCreatorSuccess implements Action {
  readonly type = ACTION_CONST_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadActionCreatorFail implements Action {
  readonly type = ACTION_CONST_FAIL;
  constructor(public payload: any) {}
}

export const CREATE_ACTION_CONST = 'CREATE ACTION_CONST';
export const CREATE_ACTION_CONST_SUCCESS = 'CREATE ACTION_CONST SUCCESS';
export const CREATE_ACTION_CONST_FAIL = 'CREATE ACTION_CONST FAIL';

export class CreateActionCreator implements Action {
  readonly type = CREATE_ACTION_CONST;
  constructor(public payload: any) {}
}

export class CreateActionCreatorSuccess implements Action {
  readonly type = CREATE_ACTION_CONST_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateActionCreatorFail implements Action {
  readonly type = CREATE_ACTION_CONST_FAIL;
  constructor(public payload: any) {}
}

export const UPDATE_ACTION_CONST = 'UPDATE ACTION_CONST';
export const UPDATE_ACTION_CONST_SUCCESS = 'UPDATE ACTION_CONST SUCCESS';
export const UPDATE_ACTION_CONST_FAIL = 'UPDATE ACTION_CONST FAIL';

export class UpdateActionCreator implements Action {
  readonly type = UPDATE_ACTION_CONST;
  constructor(public payload: any) {}
}

export class UpdateActionCreatorSuccess implements Action {
  readonly type = UPDATE_ACTION_CONST_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateActionCreatorFail implements Action {
  readonly type = UPDATE_ACTION_CONST_FAIL;
  constructor(public payload: any) {}
}

export const DELETE_ACTION_CONST = 'DELETE ACTION_CONST';
export const DELETE_ACTION_CONST_SUCCESS = 'DELETE ACTION_CONST SUCCESS';
export const DELETE_ACTION_CONST_FAIL = 'DELETE ACTION_CONST FAIL';

export class DeleteActionCreator implements Action {
  readonly type = DELETE_ACTION_CONST;
  constructor(public id: number) {}
}

export class DeleteActionCreatorSuccess implements Action {
  readonly type = DELETE_ACTION_CONST_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteActionCreatorFail implements Action {
  readonly type = DELETE_ACTION_CONST_FAIL;
  constructor(public payload: any) {}
}

export type Actions =
  | LoadActionCreator
  | LoadActionCreatorSuccess
  | LoadActionCreatorFail
  | CreateActionCreator
  | CreateActionCreatorSuccess
  | CreateActionCreatorFail
  | UpdateActionCreator
  | UpdateActionCreatorSuccess
  | UpdateActionCreatorFail
  | DeleteActionCreator
  | DeleteActionCreatorSuccess
  | DeleteActionCreatorFail;
