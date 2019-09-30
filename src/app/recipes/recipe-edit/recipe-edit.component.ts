import { Recipe } from './../recipe.model';
// import { RecipeService } from './../recipe.service';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  recipeEditForm: FormGroup;

  private storeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    /*private recipeService: RecipeService,*/
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  getControls() {
    return (this.recipeEditForm.get('ingredients') as FormArray).controls;
  }

  private initForm() {
    let editedRecipe: Recipe = {
      name: '',
      imagePath: '',
      description: '',
      ingredients: []
    };
    const ingredientsForm = new FormArray([]);

    if (this.editMode) {
      // editedRecipe = this.recipeService.getRecipeById(this.id);

      this.storeSub = this.store
        .select('recipes')
        .pipe(
          map(recipeState => {
            return recipeState.recipes.find((recipe, index) => {
              return index === this.id;
            });
          })
        )
        .subscribe(recipe => {
          editedRecipe = recipe;
        });
    }

    if (editedRecipe.ingredients) {
      for (const ingredient of editedRecipe.ingredients) {
        ingredientsForm.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      }
    }

    this.recipeEditForm = new FormGroup({
      name: new FormControl(editedRecipe.name, Validators.required),
      imagePath: new FormControl(editedRecipe.imagePath, Validators.required),
      description: new FormControl(editedRecipe.description),
      ingredients: ingredientsForm
    });
  }

  onAddIngredient() {
    (this.recipeEditForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (this.recipeEditForm.get('ingredients') as FormArray).removeAt(index);
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeEditForm.value.name,
    //   this.recipeEditForm.value.description,
    //   this.recipeEditForm.value.imagePath,
    //   this.recipeEditForm.value.ingredients
    // );
    if (this.editMode) {
      // this.recipeService.updateRecipe(this.id, this.recipeEditForm.value);
      this.store.dispatch(
        new RecipesActions.UpdateRecipe({
          index: this.id,
          updatedRecipe: this.recipeEditForm.value
        })
      );
    } else {
      // this.recipeService.addRecipe(this.recipeEditForm.value);
      this.store.dispatch(
        new RecipesActions.AddRecipe(this.recipeEditForm.value)
      );
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
