

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");

const greeting = document.getElementById("greeting");

let savedUserName = localStorage.getItem("userName");

const USER_NAME_KEY = "userName";
const HIDDEN_CLASS_NAME = "hidden";

function paintGreeting(){

    greeting.classList.remove(HIDDEN_CLASS_NAME);
    savedUserName = localStorage.getItem(USER_NAME_KEY);
    greeting.innerText = `Hello, ${savedUserName}`;

}

function submitHandler(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USER_NAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreeting();
}

loginForm.addEventListener("submit",submitHandler);

if(savedUserName !== null){
    paintGreeting();
} else {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
}










