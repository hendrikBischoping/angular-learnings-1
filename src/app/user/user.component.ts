import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: string; //'decoratores (@...) can be added to classes BUT ALSO to properties within classes!
  @Input({required: true}) name!: string; // '{required: true}' is a configuration-option to set the property 'name' (and 'avatar') as 'required' (angular throws an error if the properts isn`t set!)

  get imagePath() {
     return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    
  }
}
