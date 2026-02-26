////////!st we need to create the structure
////////To store data
let todos = [];
////////Adding task
let form = document.getElementById("form"); //this is known as TYpe ASSertion (means that ik more than TS)
let input = document.getElementById("inputValue");
let listItems = document.getElementById("items");
/////////Adding Tasks
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    // console.log(value);
    let newTask = {
        id: Date.now().toString(), ////Creating a Unique ID for each tag with even time perfection in tags
        task: value,
    };
    todos.push(newTask);
    input.value = ""; //to clear the input field after adding the task
    render();
});
// function render() {
//   listItems!.innerHTML = ""; //to clear the list before rendering the new list
//   for (let i = 0; i < todos.length; i++) {
//     let display =todos[i];
//     console.log(display);
//     const li = document.createElement("li");
//     li.textContent = display.task;
//     listItems?.appendChild(li);
//   }
// }
function render() {
    listItems.innerHTML = ""; //to clear the list before rendering the new list
    for (let i = 0; i < todos.length; i++) {
        let display = todos[i];
        const li = document.createElement("li");
        li.textContent = display.task;
        //Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTodo(display.id);
        });
        // EDIT BUTTON
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            editTodo(display.id);
        });
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        listItems?.appendChild(li);
    }
}
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}
function editTodo(id) {
    // Find the task
    const taskToEdit = todos.find((todo) => todo.id === id);
    if (!taskToEdit)
        return;
    input.value = taskToEdit.task;
    todos = todos.filter((todo) => todo.id !== id);
    render();
}
export {};
