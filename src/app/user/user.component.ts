import { Component, computed, signal } from '@angular/core';

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
  selectedUser = signal(DUMMY_USERS[randomIndex]); //uses 'angular signals' to engage with 'DUMMY_USERS'
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imgPth() { // 'getter' - a method that NOT need to be called / executed (can be used like a property). returns a new value (e.g. dynamical)
  //   return 'assets/users/' + this.selectedUser.avatar;
  // } =>> getters are not used with 'signals'
  
  onSelectUser() { // 'on...' is a common way to name methods/functions that get executed on events
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // 'set()' ist a 'signals-function' to change values
    
  }
}
