// TODO: querySelector
// querySelector 는 찾은 첫번째 것을 가져옵니다.
// querySelectorAll 은 모든 것을 가져 옵니다.
// 태그 선택 : querySelector('태그Name');
// 클래스 선택 : querySelector('.className');
// 아이디 선택 : querySelector('#idName');

// TODO: local storage
// local storage 는 작은 정보를 유저 컴퓨터에 저장하는 방법입니다.
// localStorage.setItem('nico', true);
// localStorage.getItem('nico');
// console.log(localStorage.getItem('nico')); // true
// TODO: localStorage 확인법
// 개발자 모드 => Element, Console, Sources 탭에서 Application 탭으로 이동후 확인합니다.

const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

// TODO: 이름 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// TODO: 처리 제출
function handleSubmit(event) {
  // console.log(event);
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  // console.log(currentValue);
  saveName(currentValue);
}

// TODO: 이름을 묻다.
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

// TODO: 인삿말 출력
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// TODO: loadName 함수
// localStorage 의 data를 가져오게 하는 기능을 구현합니다.
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    // she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
