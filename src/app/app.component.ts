import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switchComponent: number;

  onComponentSelected(op: number) {
    switch (op) {
      case 1:
        this.switchComponent = 1;
        break;
      case 2:
        this.switchComponent = 2;
        break;
      default:
        break;
    }
  }
}
