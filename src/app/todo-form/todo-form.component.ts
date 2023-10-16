import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../ITodo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
    todoText :string = "";

    constructor(private todoService: TodosService){}

    onSubmit(){
      console.log("todo: "+this.todoText);
      console.log(`todo: ${this.todoText}`);

      let todo: Todo = {
        todoText: this.todoText,
        isDone:false,
        date: new Date()
      }

      this.todoService.addTodo(todo)
    }
}
