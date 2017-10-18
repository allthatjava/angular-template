import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sample01Component } from './components/samples/sample01/sample01.component';
import { Sample02Component } from './components/samples/sample02/sample02.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample01Component,
    Sample02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
