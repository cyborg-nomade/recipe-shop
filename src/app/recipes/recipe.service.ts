import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      '../../assets/imgs/Breitenlesau_Krug_Bräu_Schnitzel.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      '../../assets/imgs/Burger_King_Angus_Bacon_&_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Angus Burger', 2),
        new Ingredient('Chesse slice', 2),
        new Ingredient('Salad', 1)
      ]
    )
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
