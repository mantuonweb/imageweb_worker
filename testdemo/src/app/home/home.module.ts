import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomecomponentComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[HomecomponentComponent],
  declarations: [HomecomponentComponent]
})
export class HomeModule { }
