import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  standalone: true,
  imports: [],
  templateUrl: './taskboard.component.html',
  styleUrl: './taskboard.component.css'
})
export class TaskboardComponent {
  // @Input() name?: string; // '?' tells typeScript that this value might not be avalable/set/initialised AND a am aware of it
  @Input() name: string | undefined; // alternative way du allow/accept 'undefined' values in TypeScript (union-type-feature)
} 