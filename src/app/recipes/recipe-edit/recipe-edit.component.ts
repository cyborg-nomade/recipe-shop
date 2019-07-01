import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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

  private initForm() {
    let editedRecipe: Recipe = {
      name: '',
      imagePath: '',
      description: '',
      ingredients: []
    };

    if (this.editMode) {
      editedRecipe = this.recipeService.getRecipeById(this.id);
    }

    this.recipeEditForm = new FormGroup({
      name: new FormControl(editedRecipe.name),
      imagePath: new FormControl(editedRecipe.imagePath),
      description: new FormControl(editedRecipe.description)
    });
  }

  onSubmit() {
    console.log(this.recipeEditForm);
  }
}
