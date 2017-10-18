# Angular examples
* app.modules.ts : Contains @NgModule. Everything(?) has to be registered here. Component, modules, services...

---
## Basic
### Angular TS file
```
import {Component} from '@angular/core'     // To use the decorator Component

@Component({
    selector: 'my-app',                     // becomes tag name
    template: `<h1>Hello {{name}}</h1>`     // can be direct html or file path like `./hello.html`
})

export class AppComponent {                 // 'export' is needed to let others to call this
    name = 'Angular';                       // property named 'name' and assign value
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

---
## Samples
* /src/app/components/samples/__sample01__ : Basic Data Binding, String interpolation, Style
* /src/app/components/samples/__sample02__ : Object, Interface, *ngFor