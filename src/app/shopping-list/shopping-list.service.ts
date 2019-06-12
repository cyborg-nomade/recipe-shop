import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientListChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientListChanged.emit(this.getIngredients());
  }
}
