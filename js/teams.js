const list = document.getElementById("teamList");
const form = document.getElementById("teamForm");

function renderTeams() {
  list.innerHTML = "";
  Storage.get("teams").forEach(t => {
    list.innerHTML += `<li class="list-group-item">${t.name}</li>`;
  });
}

form.onsubmit = e => {
  e.preventDefault();
  const teams = Storage.get("teams");
  teams.push({ id: Storage.generateId(), name: teamName.value });
  Storage.set("teams", teams);
  form.reset();
  renderTeams();
};

renderTeams();

