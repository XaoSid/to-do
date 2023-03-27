import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//page
import { HomeComponent } from './pages/home/home.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    TodoButtonDeleteAllComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
