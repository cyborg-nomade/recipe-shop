import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() selectComponent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onSelect(op: number) {
    switch (op) {
      case 1:
        this.selectComponent.emit(1);
        break;
      case 2:
        this.selectComponent.emit(2);
        break;
      default:
        break;
    }
  }
}
