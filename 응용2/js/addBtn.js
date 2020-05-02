const add = document.querySelector('.add'),
  plus = document.querySelector('.add i');

const handleAdd = () => {
  //   console.log(add);
  //   console.log(plus);
  const input = document.querySelector('.todo__input');
  input.classList.add('showing');
};

function init() {
  console.log('addBtn.js init ✨');
  add.addEventListener('click', handleAdd);
  plus.addEventListener('click', handleAdd);
}

init();
