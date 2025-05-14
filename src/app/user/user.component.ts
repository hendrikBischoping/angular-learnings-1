import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  //avatar = input(''); // tells angular that 'avatar' is an input to this component (setable as attribute when using the component)
  // avatar = input<string>(); // alternative, using a generic type (from TypeScript)
  avatar = input.required<string>(); // alternative of accepting inputs in a modern way 
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  // get imagePath() {
  //    return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    
  }
}
