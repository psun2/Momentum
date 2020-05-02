const body = document.querySelector('body');

// TODO: Math 의 내장함수 random(랜덤), floor(바닥) : 버림, ceil(천장) : 올림
// console.log(Math.random() * 6 + 1); // 1 ~ 6 까지의 랜덤 수
// console.log(Math.floor(3.6)); // 3
// console.log(Math.ceil(3.6)); // 4
// console.log(Math.floor(Math.random() * 6 + 1)); // 1 ~ 6 까지의 랜덤 정수
// console.log(Math.ceil(Math.random() * 6 + 1)); // 2 ~ 7 까지의 랜덤 정수

const IMG_NUMBER = 6;

// function handleImgLoad() {
//   console.log('finished loading');
// }

function paintImage(imgNumber) {
  const image = new Image();
  //   TODO: Math.random() 함수가 0을 줄 수 있기 때문에 +1 을 더해 줍니다.
  image.src = `./images/${imgNumber + 1}.png`;
  image.classList.add('bgImage');
  //   body.appendChild(image); // body 의 가장 마지막에 요소를 추가합니다.
  body.prepend(image);
  //   body.appendChild(image); // body 의 가장 처음에 요소를 추가합니다.

  //   TODO: api에서 가져온 사진이 아니기 때문에 loadend event가 실행되지 않습니다.
  //   image.addEventListener('loadend', handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);

  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
