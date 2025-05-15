import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  //avatar = input(''); // tells angular that 'avatar' is an input to this component (setable as attribute when using the component)
  // avatar = input<string>(); // alternative, using a generic type (from TypeScript)
  @Output() select = new EventEmitter(); //name (select) should describe the custom event that should be emitted

  get imagePath() {
     return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id); //'select' becomes an event (by EventEmitter) similar to e.g. 'click'
  }
}
