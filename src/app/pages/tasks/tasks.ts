import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TasksService } from '../../services/TasksService';
import { Task } from '../../models/tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatCardModule, 
    MatCheckboxModule
  ],

  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})

export class Tasks {
  tasks: Task[] = [];
  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks();
  }
}