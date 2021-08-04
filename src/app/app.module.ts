import { Page2Module } from './pages/page2/page2.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Page1Module } from './pages/page1/page1/page1.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { Page3Module } from './pages/page3/page3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Page1Module,
    Page2Module,
    Page3Module,
    jqxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
