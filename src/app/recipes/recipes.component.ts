import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  receivedClickedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onReceivedClickedRecipe(recipe: Recipe) {
    this.receivedClickedRecipe = recipe;
  }
}
