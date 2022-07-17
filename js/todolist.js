const toDoForm = document.querySelector(".todolist-form");
const toDoInput = document.querySelector(".todolist-input");
const toDoList = document.querySelector(".todo-list");
let toDos = [];
const toDosKey = "toDos";

function saveToDo() {
    localStorage.setItem(toDosKey, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDo();
}

function addToDo(newToDo) {
    const li = document.createElement("div");
    li.id = newToDo.id;
    li.classList = "todolist-item";
    const span = document.createElement("span");
    span.classList.add("todolist-item__text");
    span.innerText = newToDo.text;
    const checkBtn = document.createElement("i");
    checkBtn.classList.add("todolist-icon", "fa-solid", "fa-check");
    const delBtn = document.createElement("i");
    delBtn.classList.add("todolist-icon", "fa-solid", "fa-circle-minus");
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleToDoSumit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDoInput.value = null;
    toDos.push(newToDoObj);
    addToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSumit);

const saveToDos = localStorage.getItem(toDosKey);
if (saveToDos) {
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}
