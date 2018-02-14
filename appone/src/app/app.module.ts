import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NaturalLanguageService } from './natural.language.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [NaturalLanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
