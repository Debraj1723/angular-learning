import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone:false
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
