import { Injectable } from '@angular/core';
import { Todo } from './ITodo.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  todoSource: Subject<Todo[]> = new Subject();

  constructor() { }

  addTodo(newTodo: Todo){
    this.todos.push(newTodo);
    this.todoSource.next(this.todos); 
  }
}
