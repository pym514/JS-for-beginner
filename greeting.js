const form = document.querySelector(".js-form"),
  intput = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    //when user is not here
  } else {
    //when user is here
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
