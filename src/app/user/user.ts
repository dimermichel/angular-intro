import { Component, input, output } from '@angular/core';
import { type User } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input<boolean>();
  select = output<string>();

  get imagePath(): string {
    return `assets/users/${this.user().avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
