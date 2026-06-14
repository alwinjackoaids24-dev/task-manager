function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${task}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

function toggleTask(element) {
    element.style.textDecoration =
        element.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
}

function editTask(button) {
    let span = button.parentElement.querySelector("span");
    let newTask = prompt("Edit Task:", span.innerText);

    if (newTask) {
        span.innerText = newTask;
    }
}