import { Page1Component } from './pages/page1/page1.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const routes = [
  {
    path: 'page1', component: Page1Component
  },
  {
    path: 'page2', component: Page2Component
  },
  {
    path: 'page3', component: Page3Component
  },
  {
    path: '**',
    redirectTo: '/page1',
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
