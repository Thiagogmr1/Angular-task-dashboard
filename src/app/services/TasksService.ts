import { Injectable } from "@angular/core";
import { Task } from "../models/tasks";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private storageKey = 'tasks';

    private tasks: Task[] = [
        { id: 1, title: 'Estudar Angular', done: false },
        { id: 2, title: 'Criar dashboard', done: true },
        { id: 3, title: 'Subir projeto no GitHub', done: false }
    ];

    constructor() {
        const savedTasks = localStorage.getItem(this.storageKey);
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }
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
        this.save();
    }

    toggleTask(task: Task): void {
        task.done = !task.done;
        this.save();
    }   

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.save();
    }

    private save(): void {
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }

}
