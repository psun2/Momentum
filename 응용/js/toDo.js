const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

// TODO: 입력받은 값을 localStorage 에 저장합니다.
function saveToDos() {
  console.log('JSON 형변환 아닐시의 toDos : ' + JSON.stringify(toDos));
  const changeJSON = JSON.stringify(toDos);
  console.log('JSON.stringify(toDos) : ' + JSON.stringify(toDos));
  localStorage.setItem(TODOS_LS, changeJSON);
}

function deleteToDo(event) {
  console.log('log(event) : ' + event);
  console.log(event);
  console.log('log(event.target) : ' + event.target);
  console.log(event.target);
  console.dir('dir(event) : ' + event);
  console.dir(event);
  console.dir('dir(event.target) : ' + event.target);
  console.dir(event.target);

  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);

  console.log('업데이트 전 toDos : ' + JSON.stringify(toDos));
  const updateToDos = toDos.filter((todo) => {
    const cangeLiId = parseInt(li.id);
    console.log(todo.id, li.id);
    console.log(todo.id, parseInt(li.id));
    return todo.id !== cangeLiId;
  });
  toDos = updateToDos;
  console.log('업데이트 후 toDos : ' + JSON.stringify(toDos));

  saveToDos();
}

// TODO: browser에 그리는 paintToDo 함수 입니다.
function paintToDo(text) {
  const span = document.createElement('span');
  const li = document.createElement('li');
  //   const delBtn = document.createElement('button');
  const delBtn = document.createElement('i');
  const newId = toDos.length + 1;

  //   delBtn.innerText = '❌';
  delBtn.className = 'fas';
  delBtn.classList.add('fa-trash-restore-alt');
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  li.id = newId;

  toDos.push(toDoObj);
  console.log(toDoObj);

  delBtn.addEventListener('click', deleteToDo);

  saveToDos();
}

// TODO: loadToDos()의 loadedToDos 가 null 일시, event
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

// TODO: submit event
function toDoSubmit() {
  toDoForm.addEventListener('submit', handleSubmit);
}

// TODO: 조건에 따라 load 하는 loadToDos 함수를 생성합니다.
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    console.log('JSON.parse(loadedToDos) 전 : ' + loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    console.log('JSON.parse(loadedToDos) 후 : ' + parsedToDos);
    parsedToDos.forEach((toDo) => {
      console.log('toDo.text : ' + toDo.text);
      paintToDo(toDo.text);
    });
  }
}

// TODO: page 로드와 함께, 초기화를 실행합니다.
function init() {
  loadToDos();
  toDoSubmit();
}

init();
