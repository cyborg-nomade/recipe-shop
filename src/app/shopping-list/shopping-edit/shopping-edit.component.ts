import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIngredientIndex: number;
  editedIngredient: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedIngredientIndex = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      }
    );
  }

  onSubmitngredient(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(
      //   this.editedIngredientIndex,
      //   newIngredient
      // );

      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          index: this.editedIngredientIndex,
          ingredient
        })
      );
    } else {
      // this.shoppingListService.addIngredients(newIngredient);

      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
    form.reset();
    this.editMode = false;
  }

  onClearForm() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDeleteIngredient() {
    // this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient(this.editedIngredientIndex)
    );
    this.onClearForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
