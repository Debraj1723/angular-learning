import { Component, input, Input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required:true}) avatar!: String;
  @Input({required:true}) name!: String;

  get imagePath() {
    return '/users/' + this.avatar;
  }

  onButtonClick() {}
}
