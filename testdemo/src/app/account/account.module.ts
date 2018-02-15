import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: AccountComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[AccountComponent],
  declarations: [AccountComponent]
})
export class AccountModule { }
