import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  
  get imgPth() { // 'getter' - a method that NOT need to be called / executed (can be used like a property). returns a new value (e.g. dynamical)
    return 'assets/users/' + this.selectedUser.avatar;
  }
  
  onSelectUser() { // 'on...' is a common way to name methods/functions that get executed on events
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
    
  }
}
