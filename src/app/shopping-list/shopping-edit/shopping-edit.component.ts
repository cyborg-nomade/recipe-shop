import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    this.ingredientAdded.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
  }
}
