import type { Task } from "../types/Task";
import { saveTasks, loadTasks } from "./taskStorage";

let tasks: Task[] = loadTasks();

export function getTasks(): Task[] {
  return tasks;
}

export function addTask(taskName: string): void {
  const newTask: Task = { name: taskName, isCompleted: false };
  tasks.push(newTask);
  saveTasks(tasks);
}

export function deleteTask(index: number): void {
  tasks.splice(index, 1);
  saveTasks(tasks);
}

export function toggleTaskCompletion(index: number): void {
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveTasks(tasks);
}
