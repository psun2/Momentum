const form = document.querySelector('.js-form'),
  greeting = document.querySelector('.js-greetings'),
  input = document.querySelector('input'),
  resetBtn = document.querySelector('.input__column .js-resetBtn'),
  toDoFormHide = document.querySelector('.js-toDoForm'),
  toDoListHide = document.querySelector('.js-toDoList');

const USER_LS = 'currentUser',
  SHOWING_CL = 'showing';

// TODO: event를 통해 localStorage 에 저장된 data를 삭제 합니다.
function removeLS() {
  localStorage.removeItem(USER_LS);
}

// TODO: 버튼을 클릭하여, 이름을 지우고 싶을때 하는 event를 추가합니다.
function resetBtnClick() {
  resetBtn.addEventListener('click', removeLS);
}

// TODO: localStorage에 save 합니다.
function saveName(currentValue) {
  localStorage.setItem(USER_LS, currentValue);
}

// TODO: submit시 할 행동을 합니다.
function handleSubmit(event) {
  event.preventDefault();
  //   console.log(event);
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// TODO: 이름을 물어보고 submit event 와 클래스를 재정의 합니다.
function askForName() {
  form.classList.add(SHOWING_CL);
  resetBtn.classList.remove(SHOWING_CL);
  toDoFormHide.classList.remove(SHOWING_CL);
  toDoListHide.classList.remove(SHOWING_CL);
  form.addEventListener('submit', handleSubmit);
}

// TODO: browser에 painting 을 합니다.
function paintGreeting(name) {
  form.classList.remove(SHOWING_CL);
  resetBtn.classList.add(SHOWING_CL);
  greeting.classList.add(SHOWING_CL);
  toDoFormHide.classList.add(SHOWING_CL);
  toDoListHide.classList.add(SHOWING_CL);
  greeting.innerText = `Hello! ${name} 😁`;
}

// TODO: 조건을 통해, 이름을 물을 것인지, 저장된 이름을 painting 할것 인지 합니다.
function loadName() {
  const currentUsr = localStorage.getItem(USER_LS);
  if (currentUsr === null) {
    askForName();
  } else {
    paintGreeting(currentUsr);
  }
}

// TODO: page 로드와 함께 초기화 됩니다.
function init() {
  loadName();
  resetBtnClick();
}

init();
