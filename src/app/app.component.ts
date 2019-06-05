import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switchComponent: number;

  onShowRecipes() {
    this.switchComponent = 1;
  }

  onShowShoppingList() {
    this.switchComponent = 2;
  }
}
