const clock = document.querySelector('.js-clock');

// TODO: 시간을 얻어 옵니다.
function getTime() {
  const date = new Date();
  const houre = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // TODO: 삼항연산자를 이용해 일관적인 시간 보여주기
  clock.innerText = `
  ${houre < 10 ? `0${houre}` : houre} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  // TODO: setInterval 을 이용하여 1초에 한번씩 랜더링 합니다.
  setInterval(getTime, 1000);
}

init();
