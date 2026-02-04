import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  tasks = [
    { id: 1, title: 'Estudar Angular', done: false },
    { id: 2, title: 'Criar dashboard', done: true },
    { id: 3, title: 'Subir projeto no GitHub', done: false }
  ];
}