import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent], //registers all 'stand-alone'-components that have to be used in this component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}