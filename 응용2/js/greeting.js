const jsForm = document.querySelector('.js-nameform'),
  nameInput = jsForm.querySelector('input'),
  nameWrap = document.querySelector('.name'),
  jsName = document.querySelector('.js-name'),
  emoji = document.createElement('i'),
  toDo = document.querySelector('.todo');

const LOCAL_USER = 'currentUser',
  SHOWING_CN = 'showing';

const removeLocal = () => {
  localStorage.removeItem(LOCAL_USER);
  jsForm.classList.add(SHOWING_CN);
  nameWrap.classList.remove(SHOWING_CN);
  toDo.classList.remove(SHOWING_CN);
};

const handleClick = () => {
  removeLocal();
};

const delGreeting = () => {
  emoji.addEventListener('click', handleClick);
};

const saveGreeting = (currentUser) => {
  localStorage.setItem(LOCAL_USER, currentUser);
};

const paintGreeting = (user) => {
  //   console.dir(jsName);
  //   console.log(user);
  jsName.innerText = `안녕하세요💦 ${user}님! 😜`;
  emoji.className = 'fas';
  emoji.classList.add('fa-calendar-times');
  jsName.appendChild(emoji);
  jsForm.classList.remove(SHOWING_CN);
  nameWrap.classList.add(SHOWING_CN);
  toDo.classList.add(SHOWING_CN);
  saveGreeting(user);
  delGreeting();
};

const HandleSubmit = (event) => {
  event.preventDefault();
  //   console.dir(event);
  const currentUser = nameInput.value;
  //   console.log(currentUser);
  paintGreeting(currentUser);
  nameInput.value = '';
};

const askForName = () => {
  //   console.log(jsForm);
  jsForm.addEventListener('submit', HandleSubmit);
  jsForm.classList.add(SHOWING_CN);
  nameWrap.classList.remove(SHOWING_CN);
  toDo.classList.remove(SHOWING_CN);
};

const loadGreeting = () => {
  const currentUser = localStorage.getItem(LOCAL_USER);
  //   console.log(currentUser);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
};

function init() {
  console.log('greeting.js init ✨');
  loadGreeting();
}

init();
