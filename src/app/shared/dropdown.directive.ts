import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen = false;
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') open() {
    console.log('hello');

    this.isOpen = true;
    this.elementRef.nativeElement
      .querySelector('.dropdown-menu')
      .classList.add('show');
  }

  @HostListener('click') close() {
    if (this.isOpen) {
      console.log('hi');
      this.isOpen = false;
      this.elementRef.nativeElement
        .querySelector('.dropdown-menu')
        .classList.remove('show');
    }
  }
}
