const addTaskBtn = document.getElementById("addTaskBtn");
const task_Input = document.getElementById("taskInput");
const column = document.querySelector("#todo .task-list");
const columns = document.querySelectorAll(".task-list");
console.log(task_Input);

addTaskBtn.addEventListener("click", () => {
  let text = task_Input.value;

  if (text === "") return;
  let task = document.createElement("div");
  task.classList.add("task");
  task.textContent = text;

  task.setAttribute("draggable", "true");

  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
  column.appendChild(task);
  task_Input.value = "";
});

columns.forEach((coln) => {
  coln.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    coln.appendChild(dragging);
  });
});
