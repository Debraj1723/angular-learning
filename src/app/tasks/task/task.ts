import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) data!: TaskInterface;

  private taskService = inject(TaskService);

  @Output() complete = new EventEmitter<any>();

  completeTask() {
    this.taskService.completeTask(this.data.id);
  }
}
