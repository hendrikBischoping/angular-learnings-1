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
  
  constructor(private tasksService: TasksService) {}

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