import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
// import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import * as ShoppingListActions from './../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  receivedRecipe: Recipe;
  id: number;

  constructor(
    /* private shoppingListService: ShoppingListService,*/
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params.id;
    //   this.receivedRecipe = this.recipeService.getRecipeById(this.id);
    // });

    this.route.params
      .pipe(
        map(params => {
          return +params.id;
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(recipe => {
        this.receivedRecipe = recipe;
      });
  }

  onAddToShoppingList() {
    for (const ingredient of this.receivedRecipe.ingredients) {
      // this.shoppingListService.addIngredients(ingredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
