import { Ingredient } from 'src/app/shared/ingredients.model';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeEditForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
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
      editedRecipe = this.recipeService.getRecipeById(this.id);
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

  onSubmit() {
    console.log(this.recipeEditForm);
  }
}
