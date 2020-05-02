const body = document.querySelector('body');

const IMG_NUMBER = 7;

function handleLoaded() {
  console.log('success load');
}

function paintImage(imgNumber) {
  console.log(`${imgNumber + 1} 번 사진`);
  const image = new Image(); // === document.createElement('image');
  image.src = `./images/${imgNumber + 1}.png`;
  image.alt = `${imgNumber + 1} 번 사진`;

  image.className = 'bgImage';

  console.log('prepend 함수를 통하여 body의 가장 첫번째 요소로 집어 넣습니다.');
  body.prepend(image);

  image.addEventListener('loaded', handleLoaded);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
