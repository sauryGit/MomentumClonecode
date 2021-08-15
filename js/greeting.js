const loginform = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const savedusername = localStorage.getItem("username");
const todo = document.querySelector("#todo");


function paintGreeting(potato) {
   loginform.classList.add(HIDDEN_CLASSNAME);
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerHTML = `Hello ${potato}`;
}

function loginsubmit(event) {

   const username = loginform[0].value;
   event.preventDefault();
   loginform.classList.add(HIDDEN_CLASSNAME);
   localStorage.setItem("username", username);
   paintGreeting(username);
   todo.classList.remove("hidden");
}

if (savedusername === null) {
   loginform.classList.remove(HIDDEN_CLASSNAME);
   loginform.addEventListener("submit", loginsubmit);
}  else {
   paintGreeting(savedusername);
   todo.classList.remove("hidden");
}