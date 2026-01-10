import { NgModule } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/card/shared.module';
import { Tasks } from './tasks';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Tasks, Task, NewTask],
  exports:[Tasks],
  imports: [SharedModule, FormsModule]
})
export class TasksModule {}
