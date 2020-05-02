const toDoForm = document.querySelector('.todo-form'),
  toDoInput = document.querySelector('.todo__input'),
  ul = document.querySelector('.todo__list');

const TODOS_LS = 'ToDos';

let toDos = [];

const saveToDos = (item) => {
  //   console.log(item);
  //   console.log(toDos);
  //   localStorage.setItem(TODOS_LS, item);
  //   const getLocal = localStorage.getItem(TODOS_LS);
  //   console.log(getLocal);
  const itemJson = JSON.stringify(item);
  //   console.log(itemJson);
  localStorage.setItem(TODOS_LS, itemJson);
};

const handleToDo = (event) => {
  // console.dir(event);
  // console.dir(event.target);
  // const sp = event.target;
  // console.log(sp.id);
  const li = event.target.parentNode;
  //   console.dir(li);
  ul.removeChild(li);
  // console.log(li.id);
  // const clearToDo = toDos.filter((current) => li.id !== current.id);
  // const clearToDo = toDos.filter((current) =>
  //   console.log(li.id, typeof li.id, current.id, typeof current.id),
  // );
  // const clearToDo = toDos.filter((current) => Number(li.id) !== current.id);
  const clearToDo = toDos.filter((current) => parseInt(li.id) !== current.id);
  // console.log(clearToDo);
  toDos = clearToDo;
  saveToDos(toDos);
};

const paintToDo = (toDo) => {
  //   console.log(toDo);
  const li = document.createElement('li');
  const button = document.createElement('i');
  const span = document.createElement('span');
  button.className = 'fas';
  button.classList.add('fa-calendar-times');
  li.appendChild(button);
  span.innerText = toDo;
  li.appendChild(span);
  ul.appendChild(li);
  button.addEventListener('click', handleToDo);
  const newId = toDos.length + 1;
  const toDoObj = {
    id: newId,
    text: toDo,
  };
  li.id = newId;
  toDos.push(toDoObj);
  //   console.log(toDos);
  saveToDos(toDos);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  //   console.log(toDoInput.value);
  const toDoValue = toDoInput.value;
  paintToDo(toDoValue);
  toDoInput.value = '';
  toDoInput.classList.remove('showing');
};

const loadToDo = () => {
  toDoInput.classList.remove('showing');
  toDoForm.addEventListener('submit', handleToDoSubmit);
  const currentToDo = localStorage.getItem(TODOS_LS);
  //   console.log(currentToDo);
  if (currentToDo !== null) {
    const currentJson = JSON.parse(currentToDo);
    // console.log(currentJson);
    // console.log(currentJson[0].text);
    // const text = currentJson.map((current) => current.text);
    // console.log(text);
    // console.log(toDos);
    // paintToDo(toDos.map((current) => current.text));
    // console.log(toDos);
    // toDos.forEach((current) => paintToDo(current.text));
    currentJson.forEach((current) => paintToDo(current.text));
  }
};

function init() {
  console.log('ToDo.js init ✨');
  loadToDo();
}

init();
