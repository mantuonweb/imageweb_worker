import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RoutemanagementModule } from './routemanagement/routemanagement.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutemanagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
