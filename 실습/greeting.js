console.log('greeting.js 👀');
const form = document.querySelector('form'),
  greeting = document.querySelector('h4'),
  input = document.querySelector('input'),
  resetBtn = document.querySelector('.js-resetBtn'),
  toDosForm = document.querySelector('.js-toDoForm'),
  toDotitle = document.querySelector('.js-toDoTitle');

const getPASSWORD_LS = 'getPassword',
  SHOW_CL = 'showing';

function handleButton() {
  console.log(
    'FIXME: 버튼을 눌러 localStorage의 getPassword의 key값을 삭제 합니다. 새로고침후 이용해 주세요.',
  );
  localStorage.removeItem(getPASSWORD_LS);
}

function Click() {
  console.log(
    'FIXME: 언제든지 버튼을 누르면 localStorage가 삭제되는 버튼이 기능이 활성화 됩니다.',
  );
  resetBtn.addEventListener('click', handleButton);
}

function saveName(handleSubmit__currentVale) {
  console.log(
    'FIXME: saveName() 함수가 호출되어, localStorage에 setitem() 함수를 이용하여, localStorage 오브젝트에 key 와 value를 설정합니다.',
  );
  localStorage.setItem(getPASSWORD_LS, handleSubmit__currentVale);
}

function handleSubmit(event) {
  console.log(
    'FIXME: handleSubmit() 함수가 호출되고, event 객체를 받아, submit 이벤트가 dom 전역에 펼쳐지지 않게 preventDefault 를 걸어 주고, paintGreeting() 함수와 saveName() 함수를 호출하여, input.value argument로 줍니다.',
  );
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  console.log(
    'FIXME: askForName() 함수가 호출되어, form 태그의 .showing 클래스를 add하고, submit 이벤트를 걸어주어, handleSubmit() 함수를 호출 합니다.',
  );
  form.classList.add(SHOW_CL);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(getUser) {
  console.log(
    'FIXME: paintGreeting() 함수가 호출되어, form 태그의 .showing 클래스를 remove 하고, .js-resetBtn 클래스에 .showing 클래스를 add 하고, h4 태그의 .showing 클래스를 add 하고, argument로 받은 data를 h4 태그에 삽입합니다.',
  );
  form.classList.remove(SHOW_CL);
  greeting.classList.add(SHOW_CL);
  resetBtn.classList.add(SHOW_CL);
  toDosForm.classList.add(SHOW_CL);
  toDotitle.classList.add(SHOW_CL);
  greeting.innerText = `해킹된 비밀번호 :  ${getUser} 🤞`;
}

function loadName() {
  const currentUser = localStorage.getItem(getPASSWORD_LS);
  if (currentUser === null) {
    askForName();
    console.log(
      'FIXME: init() 함수의 if block을 실행하여, askForName() 함수를 호출합니다.',
    );
  } else {
    paintGreeting(currentUser);
    console.log(
      'FIXME: init() 함수의 else block을 실행하여, paintGreeting() 함수를 호출합니다.',
    );
  }
}

function init() {
  loadName();
  Click();
}

init();
