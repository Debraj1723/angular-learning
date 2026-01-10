import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../app/dummy-users';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-project-1');

  users = DUMMY_USERS;

  selectedUser:any;

  onUserSelcet(event:any){
    console.log(event);
    this.selectedUser = event;
  }
}
