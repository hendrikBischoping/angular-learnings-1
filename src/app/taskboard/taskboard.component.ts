import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  standalone: true,
  imports: [],
  templateUrl: './taskboard.component.html',
  styleUrl: './taskboard.component.css'
})
export class TaskboardComponent {
  @Input() name?: string;
} 