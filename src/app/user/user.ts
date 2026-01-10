import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type UserInterface } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone:false
})
export class User {
  @Input({ required: true }) user!: UserInterface;

  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<any>();

  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onButtonClick(id: any) {
    this.select.emit(id);
  }
}
