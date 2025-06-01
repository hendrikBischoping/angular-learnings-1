import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common'; // pipe (made by angular) to transform the output of the date

import { type Task } from './task.model'
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe], // pipes need to be called in 'imports' to get available to templates
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  
  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
}