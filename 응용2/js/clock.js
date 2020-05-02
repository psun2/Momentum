const paintClock = (time) => {
  //   console.log(time);
  const jsName = document.querySelector('.js-clock');
  //   console.log(jsName);
  jsName.innerText = time;
};

function loadClock() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  paintClock(time);
}

function init() {
  console.log('clock.js init ✨');
  loadClock();
  setInterval(loadClock, 1000);
}

init();
