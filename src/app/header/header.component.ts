import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() showRecipes = new EventEmitter<boolean>();
  @Output() showShoppingList = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onRecipesClicked() {
    this.showRecipes.emit(true);
  }

  onShoppingListClicked() {
    this.showShoppingList.emit(true);
  }
}
