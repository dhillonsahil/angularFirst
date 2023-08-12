import { Component, Input ,Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todo: Todo = new Todo;
  
  @Output() todoDelete :EventEmitter<Todo>  = new EventEmitter()

  handleDelete(todo:Todo){
    this.todoDelete.emit(todo);
  }

  
}
