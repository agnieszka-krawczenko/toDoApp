const addInput = document.querySelector(".add");
const button = document.querySelector("button");
const searchInput = document.querySelector(".search");
const ul = document.querySelector("ul");

const addTask = (e) => {
    e.preventDefault();
    const taskName = addInput.value;
    if (taskName === "") return;
    const li = document.createElement("li");
    li.innerHTML = `${taskName} <button>Usuń zadanie</button>`;
    ul.appendChild(li);
    addInput.value = "";
}

button.addEventListener("click", addTask);