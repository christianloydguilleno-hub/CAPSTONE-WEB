const ideas = Storage.get("ideas");
const tasks = Storage.get("tasks");

document.getElementById("ideaCount").textContent = ideas.length;
document.getElementById("taskCount").textContent = tasks.length;

const completed = tasks.filter(t => t.status === "Completed").length;
const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
document.getElementById("completion").textContent = percent + "%";

