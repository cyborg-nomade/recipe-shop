import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredients.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)'
        })
      )
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  state = 'normal';
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy() {}

  onEditIngredient(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  onAnimate() {}

  onShrink() {}
}
