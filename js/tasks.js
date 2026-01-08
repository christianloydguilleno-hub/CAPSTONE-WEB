const ideaId = new URLSearchParams(location.search).get("idea");
const list = document.getElementById("taskList");
const form = document.getElementById("taskForm");

function renderTasks() {
  list.innerHTML = "";
  Storage.get("tasks")
    .filter(t => t.ideaId == ideaId)
    .forEach(t => {
      list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
          ${t.name} - ${t.status}
        </li>`;
    });
}

form.onsubmit = e => {
  e.preventDefault();
  const tasks = Storage.get("tasks");
  tasks.push({
    id: Storage.generateId(),
    ideaId,
    name: taskName.value,
    status: status.value
  });
  Storage.set("tasks", tasks);
  form.reset();
  renderTasks();
};

renderTasks();

