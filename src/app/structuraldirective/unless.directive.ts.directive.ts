import { Directive , Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(condition: boolean) {/**here the method name same as selector name to identify by angular */
  if ( !condition) {
this.vcRef.createEmbeddedView(this.templateRef1);
  } else {
this.vcRef.clear();
  }
}
  constructor(private templateRef1: TemplateRef<any>, private vcRef: ViewContainerRef) {
  /**what temple should render and second parameter is in which viewcontainer  should be render */

  }

}
