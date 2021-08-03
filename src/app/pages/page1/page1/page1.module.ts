import { Page1Component } from './../page1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule
  ],
  exports: [Page1Component]
})
export class Page1Module { }
