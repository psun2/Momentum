const body = document.querySelector('body');

const random = Math.floor(Math.random() * 7 + 1);

const loadImage = () => {
  //   console.log(random);
  const image = new Image();
  image.src = `./images/${random}.png`;
  image.alt = `${random} 번 사진`;
  image.className = 'background';
  body.prepend(image);
};

function init() {
  console.log('bg.js init ✨');
  loadImage();
}

init();
