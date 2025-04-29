import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component'; //component 'app-component' got imported into this main.ts  -  you NEED TO import components into the files/components where you want to use them!!

bootstrapApplication(AppComponent).catch((err) => console.error(err));
