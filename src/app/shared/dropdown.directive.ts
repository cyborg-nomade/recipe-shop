import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  ViewChild
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  isOpen = false;
  @ViewChild('dropdownList', { static: true }) dropdownList: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('click') onClick(eventData: Event) {
    this.isOpen = !this.isOpen;
    this.renderer.addClass(this.dropdownList, 'show');
  }
}
