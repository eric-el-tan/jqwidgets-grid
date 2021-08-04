import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';



@NgModule({
  declarations: [Page3Component],
  imports: [
    CommonModule,
    jqxGridModule
  ],
  exports: [Page3Component],
})
export class Page3Module { }
