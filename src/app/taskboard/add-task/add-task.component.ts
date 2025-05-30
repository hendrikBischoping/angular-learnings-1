import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  onStartAddingTaks() {
    console.log('Task added');
  }

  eventBubbling(event: MouseEvent) {
    event.stopPropagation()
  }
}
