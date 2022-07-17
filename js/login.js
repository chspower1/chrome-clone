const loginForm = document.querySelector(".login-form");
const loginText = document.querySelector(".login__text");
const loginBtn = document.querySelector(".login__btn");
const greeting = document.querySelector("#greeting");
const blackbg = document.querySelector(".black");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginText.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    blackbg.remove();
}

function paintGreetings(username) {
    greeting.innerText = `Welcome ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings(savedUsername);
    blackbg.remove();
}
