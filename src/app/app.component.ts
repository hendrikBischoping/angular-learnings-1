import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TaskboardComponent } from './taskboard/taskboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((oneUser) => oneUser.id === this.selectedUserId);
  }

  onOpenUser(id: string) {
    this.selectedUserId = id;
  }
}