//  To install and use Angular you at first need to install nodeJS (LTS)
//  
//  Angular CLI
//      Angular CLI is the 'command line interface' powered by node js
//      it is used to e.g. install Angular itself globally on your device 
//      (npm install - @angular/cli)
//      
//  Create an new Angular-project:
//      type into powershell => ng new name-of-the-new-project
//  
//  
//  Angular Essentials:
//      - understanding Angular project structure
//      - working with components
//      - handling user events
//      - rendering and updating dynamic UI content
//  
//  
//  project root level:
//      - tsconfig...json files control how TypeScript-files will be compiled into JavaScript-Code; stricktness of TypeScript; how quick TS complains about potential errors etc. (don`t change if not nessesary)
//  
//      - all project-dependencies are saved in the 'package.json' file
//  
//      - you can install them at once by typing into powershell => npm install
//  
//      - angular.json contains extra configurations for the angular CLI and angular provided tools in general (don`t change if not nessesary)
//  
//  project src folder
//      - app folder
//          - most used folder: contains all components etc. of the project
//          
//      - assets folder (folder to save used content such as images)
//      
//      - index.html
//          - main html-file that will be loaded, when visitors visit the webside
//      
//      - main.ts
//          - first code-file that will be loaded / executed
//      
//      - style.scss
//          - general style for all components
//  
//  classes: (often as export at the end of an component.ts: 'export class AppComponent {}')
//      classes are a standard JavaScript feature (when using modern JavaScript) -it`s NOT a TypeScript-specific construct
//  
//  angular-decorators: (adds extra meta-data into parts of the project (e.g. classes))
//      component-decorator: (part of the angular-framework: importet from '@angular/core')
//
//          @Component({
//            selector: 'app-root',
//            standalone: true,
//            imports: [],
//            templateUrl: './app.component.html',
//            styleUrl: './app.component.css',
//          })
//  
//  'properties' & 'attributes'
//      
//  
//  @Input = setable properties (e.g. [avatar]="...")           [user.component]
//      - @Input(): predefined function from '@angular/core'
//      - allows to set dynamical values to DOM-elements
//      - the set 'properties' detect changing values and use them 
//      - (attributes are static & were reade only once when page loads)
//      - 'properties are able to get changed, but thios is not necessary
//     !- property binding sets dynamiccal values from outside a component, what makes the (default) component reuseable
//
//      - required & optional @Inputs
//          - add an 'configuration-object' '{...}' to the input, e.g.: @Input({required: true}) ==> angular knows, this is reguired (error if it is missing)
//      
//      
//  @Output:    [user.component]
//      @Output() select = new EventEmitter();
//      - @Output(): predefined function from '@angular/core'
//      - select: the name should describe the custom event/value that should be emitted (observed/submitted by any interested)
//      - new EventEmitter(): instance of the predefined angular-class "EventEmitter" (from @angular/core)
//      - EventEmitter(): called as a function
//  
//      this.select.emit();
//      - belongs into a called method/function (e.g. onSelectUser in user.component (not app.component))
//      - 'emit()' is a predefined function from 'EventEmitter' 
//      - emits the specific value that ist stored in 'select' (e.g. an id)
//      - e.g: this.select.emit(this.id) ==> ('@Input...id:string;' within user.component)
//      - passes the value(id) back to the parent-component (app.component) whenever an user is selected
//  
//  
//  
//  
//  