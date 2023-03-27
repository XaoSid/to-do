import { TaskList } from './../../model/task-list';
import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]")

  constructor() {}

  ngDoCheck(): void {
      this.setLocalStorate()
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1)
  }


  public deleteAllTaskList(){
    const confirm = window.confirm('Você deseja deletar tudo mesmo?')

    if(confirm){    
      this.taskList = []
    }

  }
  
  public validationInput(event: string, index: number){
    if(event.length){
      const confirm = window.confirm('A tarefa esta vazia, deseja deletar ela?')

      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  public setLocalStorate(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number( last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
    
  }
}
