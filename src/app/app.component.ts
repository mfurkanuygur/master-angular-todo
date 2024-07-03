import { Component } from '@angular/core';
import { TodoformComponent } from '../components/todoform/todoform.component';
import { SingleTodoComponent } from '../components/single-todo/single-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodoformComponent,SingleTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
}
