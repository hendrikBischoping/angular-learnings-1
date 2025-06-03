import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from "./add-task/add-task.component";
import { type newTask } from './new-task.model';
import { type Task } from './task/task.model';
import { TasksService } from './task.service';

@Component({
  selector: 'app-taskboard',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './taskboard.component.html',
  styleUrl: './taskboard.component.css'
})
export class TaskboardComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  addTask = false;
  
  constructor(private tasksService: TasksService) {
  }
    // dependency injection: '(...)' tells NG, wich type of value is needed, so NG creates + provides it as an argunemt (NG creates a globally available instance of the service)
    //'private' (or 'public') creates a tasksService-property that is available in the rest of the class - alternative to 'this.tasksService = tasksService;' (in constrictor body) + 'private tasksService: TasksService' above the constructor

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.addTask = true;
  }

  onCloseAddTask() {
    this.addTask = false;
  }
} 