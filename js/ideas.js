const list = document.getElementById("ideaList");
const form = document.getElementById("ideaForm");

function renderIdeas() {
  list.innerHTML = "";
  Storage.get("ideas").forEach(i => {
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${i.title}
        <a href="tasks.html?idea=${i.id}" class="btn btn-sm btn-primary">Tasks</a>
      </li>`;
  });
}

form.onsubmit = e => {
  e.preventDefault();
  const ideas = Storage.get("ideas");
  ideas.push({
    id: Storage.generateId(),
    title: title.value,
    desc: desc.value
  });
  Storage.set("ideas", ideas);
  form.reset();
  renderIdeas();
};

renderIdeas();

