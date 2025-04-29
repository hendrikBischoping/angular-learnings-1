import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent], //registers all 'stand-alone'-components that have to be used in this component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
