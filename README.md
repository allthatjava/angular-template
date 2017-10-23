# Angular examples
* app.modules.ts : Contains @NgModule. Everything(?) has to be registered here. Component, modules, services...

---
## Basic
### Angular TS file
* Component
```
import { Component } from '@angular/core'     // To use the decorator Component

@Component({
    selector: 'my-app',                     // becomes tag name
    template: `<h1>Hello {{name}}</h1>`,    //-> can be a piece of html
    templateUrl: `./hello.html`,            //   or file path
    styles: [``]                            //-> can be a piece of css
    styleUrls: ['./hello.css']              //   or file path
})
export class AppComponent {                 // 'export' is needed to let others to call this
    name = 'Angular';                       // property named 'name' and assign value
}
```

* HTML for Component
```
<body>
    <my-app>Loading AppComponent content here...</my-app>   // selector name created in TS
</body>
```

* Service
```
Import { Injectable } from '@angular/core'

@Injectable()
export class MyService{
    getSomething(): return_type {
        return  some_value_in_return_type;
    }
}
```
* Router
```
// In the app.module.ts
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: PageNotFoundComponent}
];

imports: [ 
    ...,
    RouterModule.forRoot(appRoutes)
];

// This should be within <head></head> of index.html
<base href="/">

// In app.component - This is where Routes components lands
<router-outlet></router-outlet>
```

* HTML for Router
```
// Html with links (matches with Routes in app.module.ts)
<a href="#" routerLink="/">Home</a>
<a href="#" routerLink="/about">About</a>
```

### Create Angular project by CLI command
https://angular.io/guide/quickstart

Key commands to start
```
npm install -g @angular/cli
ng new my-app
ng serve --open

```

### Using CLI to generates a set of Component
```
ng g component component/my-component
```
This command creates ts, html, and css files. Also, add this component into @NgModule

``` 
ng g service service/my-service
```
And this is how to create Service but, this will NOT ad created service into @NgModule

---
## Samples
#### Decorations
* /src/app/components/samples/__sample01__ : Basic Data Binding, String interpolation, Style
* /src/app/components/samples/__sample02__ : Object, Interface, *ngFor
* /src/app/components/samples/__sample03__ : Style and Class

#### Events

