import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'http://www.trbimg.com/img-57b62a41/turbine/ct-kfc-recipe-test-20160818'
    ),
    new Recipe(
      'Test2',
      'This is a test too',
      'http://www.trbimg.com/img-57b62a41/turbine/ct-kfc-recipe-test-20160818'
    )
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
