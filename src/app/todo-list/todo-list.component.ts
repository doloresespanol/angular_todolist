import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../ITodo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos :Todo[] = [];

    constructor(private todosService: TodosService){
    }

    ngOnInit(): void {
        this.todosService.todoSource.subscribe((todos) => (this.todos = todos));
    }
}
