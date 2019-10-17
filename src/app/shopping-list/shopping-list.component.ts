import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
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
      ),
      transition('normal <=> highlighted', animate(300))
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)'
        })
      ),
      state(
        'shrunken',
        style({
          backgroundColor: 'green',
          transform: 'translateX(0) scale(0.5)'
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(
          1000,
          style({
            borderRadius: '50px'
          })
        ),
        animate(500)
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  state = 'normal';
  wildState = 'normal';
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy() {}

  onEditIngredient(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  onAnimate() {
    this.state === 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');
    this.wildState === 'normal'
      ? (this.wildState = 'highlighted')
      : (this.wildState = 'normal');
  }

  onShrink() {
    this.wildState = 'shrunken';
  }
}
