import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for Form validation and 2 way binding
import { HttpModule } from '@angular/http';   // for HTTP request GET, POST, DELETE ...
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'; // Default landing componenet

// For Angular - Component samples
import { Sample01Component } from './components/samples/sample01/sample01.component';
import { Sample02Component } from './components/samples/sample02/sample02.component';
import { Sample03Component } from './components/samples/sample03/sample03.component';
import { Sample04Component } from './components/samples/sample04/sample04.component';
import { Sample05Component } from './components/samples/sample05/sample05.component';
import { Sample06Component } from './components/samples/sample06/sample06.component';

// For Angualr - Service samples
import { Service01Service } from './services/samples/service01/service01.service';
import { Service02Service } from './services/samples/service02/service02.service';

// For Angular - Router samples
const appRoutes: Routes = [
  { path: '', component: HomeCompoenent},
  { path: 'about', component: AboutCompoenent}
];

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
    FormsModule,                      // for form validation and 2 way binding
    HttpModule,                       // for HTTP request GET, POST ...
    RouterModule.forRoot(appRoutes)   // for Router
  ],
  providers: [Service01Service, Service02Service],   // Services must be regiester in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
