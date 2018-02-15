import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { HomeModule } from './../home/home.module';
import { AccountModule } from './../account/account.module';
const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomecomponentComponent'},
  { path: 'account', loadChildren: 'app/account/account.module#AccountComponent'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,{ 
        enableTracing: true,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports:[RouterModule,HomeModule,AccountModule],
  declarations: []
})
export class RoutemanagementModule { }
