console.log('bg.js 👀');
const body = document.querySelector('body');

const IMG_NUMBER = 6;

function testMath() {
  const a = Math.random();
  const b = Math.floor(a);
  const c = Math.ceil(a);
  console.log('Math 의 내장 함수 : ' + (b * 5 + 1), c * 5 + 1);
}

function paintImage(imgNumber) {
  const image = new Image();
  console.log('Image함수 : ' + image);
  console.dir('Image함수 : ' + image);
  console.log('Image함수 : ' + JSON.stringify(image));
  console.dir('Image함수 : ' + JSON.stringify(image));
  image.src = `./images/${imgNumber + 1}.png`;
  image.classList.add('bgimg');
  body.prepend(image);
  console.log(imgNumber + 1);

  // const img = document.createElement('img');
  // console.log(img);
  // img.src = `./images/${imgNumber + 1}.png`;
  // body.prepend(img);
}

// TODO: 이미지에 부여할 랜덤 번호 생성
function getRandom() {
  console.log(Math.floor(Math.random() * IMG_NUMBER));
  return Math.floor(Math.random() * IMG_NUMBER);
}

// TODO: 초기화 함수 작성
function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
  testMath();
}

init();
