import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageComponent } from './image.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
