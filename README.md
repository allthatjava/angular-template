# Angular examples
* app.modules.ts : Contains @NgModule. Everything(?) has to be registered here. Component, modules, services...

---
## Basic
### Angular TS file
* Component - A special directive that allows component-based structure
```Typescript
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
```html
<body>
    <my-app>Loading AppComponent content here...</my-app>   // selector name created in TS
</body>
```

* Service - DI(Dependency Injection) ready object that can shared cross the application
```Typescript
import { Injectable } from '@angular/core'

@Injectable()
export class MyService{
    getSomething(): return_type {
        return  some_value_in_return_type;
    }
}
```

* Router - Navigate through components to display
```Typescript
// In the app.module.ts
import { RouterModule, Routes } from '@angular/router';

// Routes need to be registered here
const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
imports: [ 
    RouterModule.forRoot(appRoutes) // To use Router Module
    ]
});
```

* HTML for Router
```html
// This should be within <head></head> of index.html
<base href="/">

// In the app.component - This is where the Router displays a view 
<router-outlet></router-outlet>

// Html with links (matches with Routes in app.module.ts)
<a href="#" routerLink="/">Home</a>
<a href="#" routerLink="/about">About</a>
```

### Create Angular project by CLI command
https://angular.io/guide/quickstart

Key commands to start and run the application
```
npm install -g @angular/cli             <-- Install Angular CLI
ng new my-app                           <-- Create a new Angular Project
ng serve --open                         <-- Starting npm server
```

To run the test code after clone this project
```
npm install 							<-- Install npm to the project
ng build 								<-- Compile the code
ng serve --open 						<-- node.js server will start to run the application
```

__May need uninstall and install @angular/cli and also,'ng update @angular/cli', if you have older version of Angular__ 
This will delete old version files such as '.angular-cli.json' and create 'angular.json' file.
Also, check https://update.angular.io/ for the update from previous version.


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
## Angular Cheat sheet
{{variable name}} : Display values - e.g. {{userName}}, {{user.name}}

*ngFor(let object of objects)
*ngIf( boolean expression)

[style.style-name]="value"
[ngStyle]="variable name with style in JSON format"
[class.style_class_name]="boolean variable to enable this class or not"
[ngClass]="variable name with style class in JSON format"

(event)="function() in component" : e.g. (click, keyup ...)="onClick($event)"

[(ngModel)]="variable name" type="number" : type is optional
[(ngModel)]="object.attribute" type="number" : type is optional e.g. [(ngModel)]="user.name"

&lt;form ... (submit)="fuction() in Component"&gt;

&lt;router-outlet&gt;&lt;router-outlet&gt;
&lt;a href="#" routerLink="router path name"&gt;Link&lt;/a&gt;

@Input : e.g. @Input('name') variableName:Type;
@Output : e.g. @Output customEventName = new EventEmitter<Interface_Type>();

(  ) : Customer event can be created and used with round bracket e.g. (event_name)
[ ] : Accessing attritube in Component from HTML

---
## Samples
#### Decorations
* /src/app/components/samples/**sample01** : Basic Data Binding, String interpolation, Style
* /src/app/components/samples/**sample02** : Object, Interface, *ngFor
* /src/app/components/samples/**sample03** : Style and Class

#### Events
* /src/app/components/samples/**sample04** : Events, 2 way binding, form submission

#### Services
* /src/app/components/samples/**sample05** : Basic Service (with service01)
* /src/app/components/samples/**sample06** : Http module service with GET, POST, DELETE ... (with service02)

#### Routers
* /src/app/router/* : Router samples
