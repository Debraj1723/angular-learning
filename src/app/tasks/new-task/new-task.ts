import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() closePopup = new EventEmitter<any>();

  @Output() add = new EventEmitter<{ title: String; summary: String; dueDate: String }>();

  formData = {
    title: '',
    summary: '',
    dueDate: '',
  };

  onFormSubmit() {
    this.add.emit(this.formData);
  }
}
