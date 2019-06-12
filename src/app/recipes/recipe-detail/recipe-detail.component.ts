import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() receivedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    for (const ingredient of this.receivedRecipe.ingredients) {
      this.shoppingListService.addIngredients(ingredient);
    }
  }
}
