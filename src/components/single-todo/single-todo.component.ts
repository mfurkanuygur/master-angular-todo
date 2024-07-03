import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.css',
})
export class SingleTodoComponent implements OnInit {
  allTodos: any[] = [];
  isEdit: boolean = false;
  updateTodoName: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getItems(); // İlk yüklemede verileri al
    this.todosService.allTodosChange.subscribe((updatedTodos) => {
      this.allTodos = updatedTodos; // Olay tetiklendiğinde güncelle
    });
  }
  // constructor(private todosService: TodosService) {}
  // allTodos = this.todosService.getItems();
  editTodo = (id: number) => {
    this.isEdit = !this.isEdit;
    this.updateTodoName = this.allTodos.find((t) => (t.id == id)).name;
    this.todosService.editTodo(id);
  };
  saveTodo = (e: Event, todoID: number) => {
    e.preventDefault();

    if (this.updateTodoName.trim() !== '') {
      this.todosService.updateTodo(todoID, this.updateTodoName);
      this.updateTodoName = ''; // Input değerini temizle
      this.isEdit = !this.isEdit;
    }
  };

  completeTodo = (id: number) => {
    this.todosService.completeTodo(id);
  };
  deleteTodo = (id: number) => {
    this.todosService.deleteItem(id);
  };
}
/*
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-single-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.css',
})
export class SingleTodoComponent implements OnInit {
  allTodos: any[] = [];
  // isEdit: boolean = false;
  updateTodoName: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getItems(); // İlk yüklemede verileri al
    this.todosService.allTodosChange.subscribe((updatedTodos) => {
      this.allTodos = updatedTodos; // Olay tetiklendiğinde güncelle
    });
  }
  // constructor(private todosService: TodosService) {}
  // allTodos = this.todosService.getItems();
  editTodo = (id: number) => {
    this.todosService.editTodo(id);
  };
  saveTodo = (e: Event,todoID:number) => {
    e.preventDefault();

    // Örneğin updateTodo fonksiyonu olduğunu varsayalım
    this.todosService.updateTodo(todoID, this.updateTodoName);

    this.updateTodoName = ''; // Input değerini temizle
    
  };

  completeTodo = (id: number) => {
    this.todosService.completeTodo(id);
  };
  deleteTodo = (id: number) => {
    this.todosService.deleteItem(id);
  };
}
 */
