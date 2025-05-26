import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>(); // '<string>' generic typing the value of the EventEmitter isn`t necessary but increases the security for TS that the correct type of value will be emitted( the thype, that will be expected in app.component.ts/onOpenUser(id: string))

  get imagePath() {
     return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
    // console.log('This user is called ' + this.name);
  }
}
