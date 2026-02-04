import { Injectable } from "@angular/core";
import { Task } from "../models/tasks";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = [
        { id: 1, title: 'Estudar Angular', done: false },
        { id: 2, title: 'Criar dashboard', done: true },
        { id: 3, title: 'Subir projeto no GitHub', done: false }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    toggleTask(task: Task): void {
        task.done = !task.done;
    }   
}
