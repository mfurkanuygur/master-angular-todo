import { Component, Input, OnInit } from '@angular/core';
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
  @Input() isEdit!: boolean;
  updateTodoName: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getItems();
    this.todosService.allTodosChange.subscribe((updatedTodos) => {
      this.allTodos = updatedTodos;
    });
  }

  editTodo = (id: number) => {
    this.isEdit = !this.isEdit;
    this.updateTodoName = this.allTodos.find((t) => t.id == id).name;
    this.todosService.changeDisable();
    this.todosService.editTodo(id);
  };
  saveTodo = (e: Event, todoID: number) => {
    e.preventDefault();
    if (this.updateTodoName.trim() !== '') {
      this.todosService.updateTodo(todoID, this.updateTodoName);
      this.updateTodoName = '';
      this.isEdit = !this.isEdit;
      this.todosService.changeDisable();
    }
  };

  completeTodo = (id: number) => {
    this.todosService.completeTodo(id);
  };
  deleteTodo = (id: number) => {
    this.todosService.deleteItem(id);
  };
}
