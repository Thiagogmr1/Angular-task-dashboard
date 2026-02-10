import { Injectable } from "@angular/core";
import { Task } from "../models/tasks";

const STORAGE_KEY = 'tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks: Task[] = [];

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (stored) {
            this.tasks = JSON.parse(stored);
        } else {

        this.tasks = [
        { id: 1, title: 'Estudar Angular', done: false },
        { id: 2, title: 'Criar dashboard', done: false },
        { id: 3, title: 'Subir projeto no GitHub', done: false }
    ];
    this.saveToStorage();
        }
    }
    private saveToStorage(): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(title: string): void {
        const newTask: Task = {
            id: Date.now(),
            title,
            done: false
        };

        this.tasks.push(newTask);
        this.saveToStorage();
    }

    toggleTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        task.done = !task.done;
        this.saveToStorage();
    }
   
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveToStorage();
    }
}
