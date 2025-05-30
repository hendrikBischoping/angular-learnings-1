import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from "./add-task/add-task.component";

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
  addTask: boolean = false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.userId)
  }

  onDeleteTask(id:string) {
    this.dummyTasks = this.dummyTasks.filter((taks) => taks.id !== id);
  }

  onAddTask() {
    this.addTask = !this.addTask;
  }
} 