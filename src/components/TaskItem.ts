import type { Task } from "../types/Task";

export function createTaskElement(
  task: Task,
  index: number,
  toggleTaskCompletion: (index: number) => void,
  deleteTask: (index: number) => void,
  renderTasks: () => void
): HTMLDivElement {
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = task.name;

  if (task.isCompleted) {
    div.style.textDecoration = "line-through";
  } else {
    div.style.textDecoration = "none";
  }

  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";
  completeCheckbox.checked = task.isCompleted;
  completeCheckbox.addEventListener("change", () => {
    toggleTaskCompletion(index);
    renderTasks();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    deleteTask(index);
    renderTasks();
  });

  label.prepend(completeCheckbox);
  div.appendChild(label);
  div.appendChild(deleteButton);

  return div;
}
