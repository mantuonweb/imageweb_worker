import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes,PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule'},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
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
  exports:[RouterModule],
  declarations: []
})
export class RoutemanagementModule { }
