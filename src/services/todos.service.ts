import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private allTodos: any[] = [];
  allTodosChange = new EventEmitter<any[]>();
  constructor() {}

  addItem(newTodo: Object) {
    this.allTodos = [newTodo, ...this.allTodos];
    this.allTodosChange.emit(this.allTodos);
  }

  getItems() {
    return this.allTodos;
  }
  deleteItem(todoID: number) {
    this.allTodos = this.allTodos.filter((t) => t.id !== todoID);
    this.allTodosChange.emit(this.allTodos);
  }
  completeTodo(todoID: number) {
    const todo = this.allTodos.find((todo) => todo.id === todoID);
    if (todo) {
      todo.isComplete = !todo.isComplete;
      this.allTodosChange.emit(this.allTodos);
    }
  }
  editTodo(todoID: number) {
    const todo = this.allTodos.find((todo) => todo.id === todoID);
    if (todo) {
      todo.isEdit = !todo.isEdit;
      this.allTodosChange.emit(this.allTodos);
    }
  }
  updateTodo(todoID: number, updateTodoName: string) {
    const todo = this.allTodos.find((todo) => todo.id === todoID);
    if (todo) {
      todo.isEdit = !todo.isEdit;
      todo.name = updateTodoName;
      this.allTodosChange.emit(this.allTodos);
    }
  }
}
