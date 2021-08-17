const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    span.innerText = newTodo.text;


    button.innerText = " ";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => {return item.id !== parseInt(li.id)});
    saveToDos();
    li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);


if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

