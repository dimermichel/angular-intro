import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectUserId = signal<string | undefined>(undefined);

  selectedUser = computed(() => {
    const user = this.users.find((u) => u.id === this.selectUserId());
    return user;
  });

  onUserSelected(id: string) {
    this.selectUserId.set(id);
  }
}
