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
    templateUrl: `./hello.html`,            //->   or file path
    styles: [``]                              // same idea with template for style
    styleUrls: ['./hello.css']
})
export class AppComponent {                 // 'export' is needed to let others to call this
    name = 'Angular';                       // property named 'name' and assign value
}
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
### Html file
```
<body>
    <my-app>Loading AppComponent content here...</my-app>   // selector name created in TS
</body>
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

