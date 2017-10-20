import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sample01Component } from './components/samples/sample01/sample01.component';
import { Sample02Component } from './components/samples/sample02/sample02.component';
import { Sample03Component } from './components/samples/sample03/sample03.component';
import { Sample04Component } from './components/samples/sample04/sample04.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample01Component,
    Sample02Component,
    Sample03Component,
    Sample04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
