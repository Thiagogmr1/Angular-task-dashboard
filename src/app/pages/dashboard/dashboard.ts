import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/TasksService';
import { Task } from '../../models/tasks';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [CommonModule, MatProgressBarModule, MatListModule]
})
export class Dashboard implements OnInit {

  total = 0;
  done = 0;
  progress = 0;
  top3pending: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.calculateStats();
  }

  private calculateStats(): void {
    const tasks = this.tasksService.getTasks();

    this.total = tasks.length;
    this.done = tasks.filter(t => t.done).length;

    this.progress = this.total === 0
      ? 0
      : Math.round((this.done / this.total) * 100);

    this.top3pending = tasks
      .filter(t => !t.done)
      .slice(0, 3);
  }
}
