import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
    selector: 'tr[usaHighlightOnHover]',
    standalone: false
})
export class HighlightOnHoverDirective {
  private readonly hoverClass = 'usa-table__row--hovered';

  @Input()
  usaHighlightOnHover = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.usaHighlightOnHover) {
      this.addHoverClass();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.usaHighlightOnHover) {
      this.removeHoverClass();
    }
  }

  addHoverClass() {
    this.renderer.addClass(this.el.nativeElement, this.hoverClass);
  }
  removeHoverClass() {
    this.renderer.removeClass(this.el.nativeElement, this.hoverClass);
  }
}
