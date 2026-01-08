import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
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
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasks(userID: String) {
    return this.tasks.filter((task) => task.userId === userID);
  }

  completeTask(taskID: String) {
    this.tasks = this.tasks.filter((task) => task.id !== taskID);
    this.setLocalStorage();
  }

  createNewTask(task: { userId: string; title: string; summary: string; dueDate: string }) {
    let taskId = new Date().toISOString();
    this.tasks.unshift({
      id: taskId,
      userId: task.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.setLocalStorage();
  }

  private setLocalStorage() {
    const stringifiedTasks = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', stringifiedTasks);
  }
}
