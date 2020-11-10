const addInput = document.querySelector(".add");
const button = document.querySelector("button");
const searchInput = document.querySelector(".search");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector('h3 span');

const tasksList = [];

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
}

button.addEventListener("click", addTask);