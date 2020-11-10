const addInput = document.querySelector(".add");
const form = document.querySelector("form");
const searchInput = document.querySelector(".search");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector('h3 span');

const tasksList = [];

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    tasksList.splice(index, 1)
    taskNumber.textContent = tasksList.length;
}

const addTask = (e) => {
    e.preventDefault();
    const taskName = addInput.value;
    if (taskName === "") return;
    const task = document.createElement("li");
    task.innerHTML = `${taskName} <button>Usuń zadanie</button>`;
    ul.appendChild(task);
    tasksList.push(task);
    addInput.value = "";
    taskNumber.textContent = tasksList.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener("submit", addTask);