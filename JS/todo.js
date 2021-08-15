
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoUl = document.querySelector("#todoUl");

const checkButton = document.querySelector(".doneToDoCheckBox");

let todoArray = [];

function countToDo(){
    if(todoArray.length >= 9) {
        todoInput.disabled = true;
        todoInput.placeholder = "You can register up to 9 to Do.";
    } else {
        todoInput.disabled = false;
        todoInput.placeholder = "Do you have work to do today?"
    }
}

function doneToDo(event){
    const lineThroughLi = event.target.parentElement;
    lineThroughLi.style.textDecoration = "line-through";
    lineThroughLi.style.color = "gray";

    const doneToDoCheckBoxId = event.target;
    doneToDoCheckBoxId.disabled = true;

    console.log(lineThroughLi.id);

    for (let index = 0; index < todoArray.length; index++) {
        const todoLiId = todoArray[index].id;
        if(todoLiId == lineThroughLi.id){
            todoArray[index].completed = "done";
            savingToDo();
        }
    }
}

function deleteToDo(event){
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    todoArray = todoArray.filter(todo => todo.id !== parseInt(deleteLi.id));
    savingToDo();
}

function paintingToDo(todo){
    
    const todoCount = localStorage.length;

    const li = document.createElement("li");        // todo list
    const checkbox = document.createElement("input");  // checkbox
    const span = document.createElement("span");    // todo contents
    const delButton = document.createElement("button"); // del button
    
    li.id = todo.id;

    checkbox.type = `checkbox`;
    checkbox.id = todo.id + "_doneCheckBox";
    checkbox.className = `doneToDoCheckBox`;

    span.innerText = todo.text;

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delButton);
    todoUl.appendChild(li);

    if(todo.completed == "done") {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
        checkbox.checked = true;
        checkbox.disabled = true;
    }

    checkbox.addEventListener("click", doneToDo);
    delButton.addEventListener("click", deleteToDo);

}

function savingToDo(){

    localStorage.setItem("toDoList", JSON.stringify(todoArray));
    countToDo();
}

function todoSubmit(event){

    event.preventDefault();
    const todo = {
        id : Date.now(),
        text : todoInput.value,
        completed : "not yet" 
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

countToDo();