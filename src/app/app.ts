import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from '../app/dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
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
