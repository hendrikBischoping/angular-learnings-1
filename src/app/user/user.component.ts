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
  // @Output() select = new EventEmitter(); ==> is the older/first version od output() an very common / often used yet
  select = output<string>(); // similar to @Output (does the same), but is newer, shorter and without any decorators (pendant to 'input()' but without using/creating 'signals')
  //typing 'output()' with '<string>' is necessary to tell TS the type of 'this.id' in 'this.select.emit(this.id);' (the emitted value)

  get imagePath() {
     return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
    console.log('This user has the id: '+ this.id);
  }
}
