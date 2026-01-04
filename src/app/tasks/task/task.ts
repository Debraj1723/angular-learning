import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from './task.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) data!: TaskInterface;

  @Output() complete = new EventEmitter<any>();
}
