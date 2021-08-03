import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';



@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    jqxGridModule
  ],
  exports: [Page2Component]
})
export class Page2Module { }
