import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const ingredientAdded = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredients(ingredientAdded);
  }
}
