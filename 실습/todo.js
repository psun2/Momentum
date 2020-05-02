console.log('todo.js 👀');
const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList'),
  toDoTitle = document.querySelector('.js-toDoTitle');

const TODOS_LS = 'toDos',
  SHOW_CN = 'showing';

console.log(
  'FIXME: toDos 삭제시 배열을 업데이트 해주어야 하므로 let 키워드로 변경합니다.',
);
// const toDos = [];
let toDos = [];

function filterFn(todo) {
  const i = event.target;
  const btn = i.parentNode;
  const li = btn.parentNode;
  console.log(todo.id, li.id);
  //   let prasedLi = parseInt(li.id);
  //   console.log(prasedLi);
  return todo.id !== parseInt(li.id);
}

function handleDelte(event) {
  console.log(event);
  console.log(event.target);
  console.dir(event);
  console.dir(event.target);
  const i = event.target;
  const btn = i.parentNode;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  //   const clearToDos = toDos.filter(filterFn);
  const clearToDos = toDos.filter((todo) => {
    console.log(todo.id, li.id);
    return todo.id !== parseInt(li.id);
  });

  console.log(clearToDos);
  toDos = clearToDos;

  saveToDo();
}

function saveToDo() {
  console.log(toDos);
  //   localStorage.setItem(TODOS_LS, toDos);
  console.log(
    'FIXME: localStorage.setItem(TODOS_LS, toDos); 이런식으로 넘겨 주 었을 때',
  );
  console.log(
    'FIXME: Application 에서 보면 toDos에 [object Object] 이러한 형식으로 저장 됩니다.',
  );
  console.log(
    'TODO: localStorage.getItem(TODOS_LS)',
    localStorage.getItem(TODOS_LS),
  );
  console.log(
    'FIXME: getItem 으로 출력을 시켜도 [object Object] 형식으로 출력됩니다. 우리가 얻고 자 하는 값이 아닙니다.',
  );
  console.log(
    'FIXME: JSON 을 사용해 JSON 형식의 문자열로 변환하는 stringify() 함수를 이용합니다.',
  );
  console.log(JSON);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const delBtn = document.createElement('buttom');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const fontAwesome = document.createElement('i');
  const I_CN = 'fas';
  const FA_CN = 'fa-trash-restore-alt';
  const newId = toDos.length + 1;

  fontAwesome.className = I_CN;
  fontAwesome.classList.add(FA_CN);
  delBtn.appendChild(fontAwesome);

  li.appendChild(delBtn);
  span.innerText = text;
  li.appendChild(span);
  toDoList.appendChild(li);

  li.id = newId;

  toDoObj = {
    toDo: text,
    id: newId,
  };

  toDos.push(toDoObj);

  saveToDo();
  delBtn.addEventListener('click', handleDelte);
}

function savedToDosPaint(currntToDos) {
  console.log(currntToDos);
  console.log(
    'FIXME: saveToDosPaint 에 마우스 오버시 type이 String 을 표현하고 있어, 다시 JSON parse() 함수를 사용 하여 JSON type의 Object 로 변경 시켜주어야 합니다.',
  );

  //   saveToDosPaint.forEach((todo) => {
  //     console.log(todo.text);
  //   });

  const parsedToDos = JSON.parse(currntToDos);
  parsedToDos.forEach((todo) => {
    console.log(todo.toDo);
    paintToDo(todo.toDo);
  });
}

function hideToDoTitle() {
  toDoTitle.classList.remove(SHOW_CN);
}

function showingToDoTitle() {
  //   toDoTitle.classList.add(SHOW_CN);
  toDoTitle.innerText = '할 일 목록이 존재 하지 않습니다. 추가해주세요.';
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const currntToDos = localStorage.getItem(TODOS_LS);
  if (currntToDos === null) {
    showingToDoTitle();
  } else {
    hideToDoTitle();
    savedToDosPaint(currntToDos);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}
init();
