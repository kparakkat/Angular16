import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarFixedHamComponent } from './nav-bar-fixed-ham/nav-bar-fixed-ham.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarFixedHamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
