import {Directive, Output, EventEmitter, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();
  @Input() btnElementRef: ElementRef;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target): void{
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      console.log('outside');
      this.clickOutside.emit();
    }else {
      console.log('inside');
    }
  }
}