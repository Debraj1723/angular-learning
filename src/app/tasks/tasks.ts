import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: true,
  imports: [Task, NewTask],
})
export class Tasks {
  @Input() name!: String;

  @Input() userId!: String;

  popupStatus = false;

  tasks: any = [];

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getTasks(this.userId);
  }

  addTask() {
    this.popupStatus = true;
  }

  submitNewTask(task: any) {
    this.taskService.createNewTask({
      ...task,
      userId: this.userId,
    })
    this.popupStatus = false;
  }
}
