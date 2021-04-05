import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTesk: string;
  tasks: TodoItem[] = [];

  addList() {
    if (this.newTesk.length !== 0) {
      this.tasks.push({ description: this.newTesk, done: false });
    }
  }

  deleteTasks(index: number) {
    this.tasks.splice(index, 1);
  }
}
