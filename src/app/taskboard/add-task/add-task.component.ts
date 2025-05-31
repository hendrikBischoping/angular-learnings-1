import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; //summary of functionalities (directives, features, properties etc) that are commonly used with forms (e.g. '[(ngModel)'])

import { type newTask } from '../new-task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], // directives such as 'FormsModule' has to be registered at imports just like any used 'component'
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancle = new EventEmitter<void>;
  @Output() add = new EventEmitter<newTask>;
  enteredTitle = ''; // no imports or typing necessary, if the property is only used within the component (incl. its template)
  enteredSummary = '';
  enteredDate = '';

  onCancleNewTask() {
    this.cancle.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
