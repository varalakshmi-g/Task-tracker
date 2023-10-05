document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", addTask);
    taskList.addEventListener("click", deleteTask);
    taskList.addEventListener("click", toggleTask);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

    function deleteTask(e) {
        if (e.target.classList.contains("delete-button")) {
            e.target.parentElement.remove();
        }
    }

    function toggleTask(e) {
        if (e.target.tagName === "SPAN") {
            e.target.classList.toggle("completed");
        }
    }
});
