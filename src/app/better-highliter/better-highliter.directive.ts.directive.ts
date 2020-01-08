import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighliterDirectiveTs]'
})
export class BetterHighliterDirective implements OnInit {
  @Input() defaultColor: String = 'transparent';
  @Input() highlightColor: String = 'blue';
@HostBinding('style.backgroundColor') backgroundColor: String = 'transperent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
ngOnInit() {
  this.backgroundColor = this.defaultColor; /** this is the first applicable */
 // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
}
@HostListener('mouseenter') mouseover(eventData: Event) {
 // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
 // this.backgroundColor = 'green';
 this.backgroundColor = this.highlightColor;
}
@HostListener('mouseleave') mouseleave(eventData: Event) {
 // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
// this.backgroundColor = 'transparent';
this.backgroundColor = this.defaultColor;
}
}
