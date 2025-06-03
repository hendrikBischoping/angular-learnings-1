import { Injectable } from "@angular/core";
import { type Task } from "./task/task.model";
import { newTask } from "./new-task.model";

@Injectable({ providedIn: 'root' }) //registers this service as 'injectable' so NG can inject it to other components 
export class TasksService {

    private dummyTasks = [
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
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks')
        
        if (tasks) {
            this.dummyTasks = JSON.parse(tasks); // checks if the data stored in LS differs from dummyTasks and overwrites dummyTasks if necessary (loads stored data from LS)
        }
    }

    getUserTasks(userId: string) {
        return this.dummyTasks.filter((task) => task.userId === userId);
    }

    addTask(task: newTask, userId: string) {
        this.dummyTasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.date,
        })
        this.saveTasks()
    }

    deleteTask(id: string) {
        this.dummyTasks = this.dummyTasks.filter((taks) => taks.id !== id);
        this.saveTasks()
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.dummyTasks)); // checks if the data stored in LS differs from dummyTasks and overwrites LS-data if necessary (uploads new data to LS)
    }
}