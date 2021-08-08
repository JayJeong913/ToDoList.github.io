
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoBox = document.querySelector("#todoBox");

let todoArray = [];

function deleteToDo(event){
    
    const deleteLi = event.target.parentElement;
    deleteLi.remove();

    //console.log(typeof(deleteLi.id));
    //console.log(typeof(JSON.parse(localStorage.getItem("toDoList"))[0].id));
    todoArray = todoArray.filter(todo => todo.id !== parseInt(deleteLi.id));
    console.log(todoArray);
    savingToDo();
}

function paintingToDo(todo){
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");

    li.id = todo.id;
    span.innerText = todo.text;
    delButton.innerText = "Del";

    li.appendChild(span);
    li.appendChild(delButton);
    todoBox.appendChild(li);

    delButton.addEventListener("click", deleteToDo);
}

function savingToDo(){

    localStorage.setItem("toDoList", JSON.stringify(todoArray));
    
}

function todoSubmit(event){

    event.preventDefault();
    const todo = {
        id : Date.now(),
        text : todoInput.value
    }
    todoInput.value = "";

    todoArray.push(todo);
    savingToDo(todoArray);

    paintingToDo(todo);
}

todoForm.addEventListener("submit", todoSubmit);

const savedToDos = localStorage.getItem("toDoList");

if(savedToDos !== null){
    const savedToDoArray = JSON.parse(savedToDos);
    todoArray = savedToDoArray
    todoArray.forEach(paintingToDo);
}

