import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TasksService } from '../../services/TasksService';
import { Task } from '../../models/tasks';

type TaskFilter = 'all' | 'pending' | 'completed';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.scss']
})
export class Tasks {
  tasks: Task[] = [];
  newTaskTitle = '';

  currentFilter: TaskFilter = 'all';

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks();
  }

  addTask(): void {
    if (!this.newTaskTitle.trim()) return;
    this.tasksService.addTask(this.newTaskTitle);
    this.newTaskTitle = '';
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
  }

  setFilter(filter: TaskFilter): void {
    this.currentFilter = filter;
  }

  get filteredTasks(): Task[] {
    if (this.currentFilter === 'pending') {
      return this.tasks.filter(task => !task.done);
    }

    if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.done);
    }

    return this.tasks;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.done).length;
  }
}