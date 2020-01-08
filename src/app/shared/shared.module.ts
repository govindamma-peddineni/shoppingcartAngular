import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive.ts.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class Sharedmodule {

}
