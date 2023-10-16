import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
    todoText :string = "";

    onSubmit(){
      console.log("todo: "+this.todoText);
      console.log(`todo: ${this.todoText}`);
    }
}
