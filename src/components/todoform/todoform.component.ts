import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../../services/todos.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css',
})
export class TodoformComponent implements OnInit {
  todoname: string = '';
  isDisabled: any;
  private subscription: any;
  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.isDisabled = this.todoService.changeDisable(); // Initialize the isDisabled value
    this.subscription = this.todoService.isDisableChange.subscribe(
      (isDisabled) => {
        this.isDisabled = isDisabled;
      }
    );
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  add(e: Event) {
    if (this.todoname.trim() !== '') {
      const newTodo: Object = {
        id: self.crypto.randomUUID(),
        name: this.todoname.trim(),
        isComplete: false,
        isEdit: false,
      };
      e.preventDefault();
      this.todoService.addItem(newTodo);
      this.todoname = '';
    }
  }
}
