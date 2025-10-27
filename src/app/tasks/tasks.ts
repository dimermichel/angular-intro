import { Component, input, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task';
import { Task } from './task/task.model';
import { NewTask } from './new-task/new-task';
import { NewTaskDTO } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userId = input.required<string>();
  name = input.required<string>();
  isAddTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    this.isAddTask = true;
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }
}
