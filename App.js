document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector("input[type='text']");
    const addButton = document.querySelector("input[type='button']");
    const progressContainer = document.querySelector(".Progress_container");
    const issuesContainer = document.querySelector(".Issues_container");
    const doneContainer = document.querySelector(".ToDo_End_container");

    addButton.addEventListener("click", function() {
        const todoText = inputField.value.trim();
        if (todoText !== "") {
            const todoElement = createTodoElement(todoText);
            progressContainer.appendChild(todoElement);
            inputField.value = "";
        }
    });

    function createTodoElement(todoText) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.textContent = todoText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.addEventListener("click", function() {
            todoItem.remove();
        });
        // Here create the Button for Switch the ToDo
        const moveButton = document.createElement("button");
        moveButton.textContent = "Verschieben";
        moveButton.addEventListener("click", function() {
            const parentContainer = todoItem.parentElement;
            if (parentContainer === progressContainer) {
                issuesContainer.appendChild(todoItem);
            } else if (parentContainer === issuesContainer) {
                doneContainer.appendChild(todoItem);
            }
        });
        todoItem.appendChild(deleteButton);
        todoItem.appendChild(moveButton);
        return todoItem;
    }
});