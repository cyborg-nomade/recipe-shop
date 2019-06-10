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

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  open() {
    this.isOpen = true;
    this.elementRef.nativeElement
      .querySelector('.dropdown-menu')
      .classList.add('show');
  }

  close() {
    this.isOpen = false;
    this.elementRef.nativeElement
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }

  @HostListener('click') onClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
