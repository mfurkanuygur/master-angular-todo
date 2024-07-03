import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../../services/todos.service';
@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css',
})
export class TodoformComponent {
  todoname: string = '';
  constructor(private todoService: TodosService) { }

  add(e: Event) {
    if (this.todoname.trim() !== '') {
      const newTodo: Object = {
        id: self.crypto.randomUUID(),
        name: this.todoname,
        isComplete: false,
        isEdit:false
      };
      e.preventDefault();
      this.todoService.addItem(newTodo);
      
      this.todoname = '';
    }
  }
}
