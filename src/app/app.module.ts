import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Sample01Component } from './components/samples/sample01/sample01.component';
import { Sample02Component } from './components/samples/sample02/sample02.component';
import { Sample03Component } from './components/samples/sample03/sample03.component';
import { Sample04Component } from './components/samples/sample04/sample04.component';
import { Sample05Component } from './components/samples/sample05/sample05.component';
import { Sample06Component } from './components/samples/sample06/sample06.component';

import { Service01Service } from './services/samples/service01/service01.service';
import { Service02Service } from './services/samples/service02/service02.service';

@NgModule({
  declarations: [
    AppComponent,
    Sample01Component,
    Sample02Component,
    Sample03Component,
    Sample04Component,
    Sample05Component,
    Sample06Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Service01Service, Service02Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
