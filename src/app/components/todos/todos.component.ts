import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  ngOnInit(): void {
  }
  todos: Todo[] = [];
  constructor(){
    let localItem=localStorage.getItem("todos")
    if(localItem!=null){
      this.todos=JSON.parse(localItem)
    }
    
  }

  deleteTodo(todo : Todo){
    let index= this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addtodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
