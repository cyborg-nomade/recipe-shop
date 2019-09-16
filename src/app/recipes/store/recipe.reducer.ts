import { Recipe } from './../recipe.model';
import * as RecipeActions from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

export const initialState: State = {
  recipes: []
};
export function recipeReducer(
  state = initialState,
  action: RecipeActions.RecipesActions
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES: {
      // add your code
      return {
        ...state,
        recipes: [...action.payload]
      };
    }

    default:
      return state;
  }
}
