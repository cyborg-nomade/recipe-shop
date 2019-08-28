import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredients.model';

export const ADD_INGREDIENT = '[Shopping List] ADD_INGREDIENT';
export const UPDATE_INGREDIENT = '[Shopping List] UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = '[Shopping List] DELETE INGREDIENT';
export const START_EDIT = '[Shopping List] START EDIT';
export const STOP_EDIT = '[Shopping List] STOP EDIT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor() {}
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
  constructor() {}
}

export type ShoppingListActions =
  | AddIngredient
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
