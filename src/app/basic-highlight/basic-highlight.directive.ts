import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appBasicHighlight]'/**to give the instruction to the angular we use selector.
  it should be unique  it can be recognised by the element without [] in html page*/
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef1: ElementRef) {/**we are getting access to the element and we are overriding the existing style  */
  }
ngOnInit() {
  this.elementRef1.nativeElement.style.backgroundcolor = 'red';
}
}
