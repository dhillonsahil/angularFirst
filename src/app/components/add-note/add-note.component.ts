import { Component,Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
[x: string]: any;
title:string="";
desc:string="";

@Output() todoadd :EventEmitter<Todo> = new EventEmitter();

handleSubmit(){
  const todo:Todo={
    title:this.title,
    desc:this.desc,
    active:true,
    sno:Todo.counter
  }
  this.todoadd.emit(todo)
  this.title="";
  this.desc="";
}
}
