import { createTaskElement } from "./components/TaskItem";
import {
  addTask,
  deleteTask,
  getTasks,
  toggleTaskCompletion,
} from "./services/taskManager";
import { clearElement } from "./utils/domUtils";

// HTML要素を取得
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskButton = document.getElementById(
  "addTaskButton"
) as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

// タスクを表示する関数
function renderTasks(): void {
  clearElement(taskList);
  const tasks = getTasks();

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "タスクがありません。";
    taskList.appendChild(emptyMessage);
    return;
  }

  tasks.forEach((task, index) => {
    const taskElement = createTaskElement(
      task,
      index,
      toggleTaskCompletion,
      deleteTask,
      renderTasks
    );
    taskList.appendChild(taskElement);
  });
}

// ボタンにイベントを追加
addTaskButton.addEventListener("click", () => {
  if (taskInput.value) {
    addTask(taskInput.value);
    taskInput.value = "";
    renderTasks();
  }
});

// 初期表示
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});
