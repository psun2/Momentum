// TODO: #3.2 Making a JS Clock part Two (JS 시계 만들기 2 부)

const clockCintainer = document.querySelector('.js-clock'),
  // const clockTitle = document.querySelector('.js-title');
  clockTitle = document.querySelector('h1');

// TODO: Date()
// const date = new Date();
// console.log(date);
// // Thu Apr 23 2020 17:55:34 GMT+0900 (대한민국 표준시)
// console.log(date.getDay()); // 4
// // 4 는 목요일을 의미합니다.
// // 1 은 월요일이 되겠습니다.
// console.log(date.getDate()); // 23
// console.log(date.getHours()); // 17
// console.log(date.getMinutes()); // 55

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
// TODO: 발생문제 : 10미만에서 01, 02 가 아닌 1, 2 으로 출력
// TODO: 삼항연산자 사용
// `${seconds < 10 `0${seconds}` : seconds}`
// 초가 10보다 작으면 ? 즉 true면 0 + seconds
// 그 외의 경우 이면 : 즉 false면 seconds 출력
// ? => if
// : => else

// TODO: setInterval(fn, 1000)
// setInterval 함수는 2개의 argument 를 받습니다.
// 첫 번째 인자로 실행할 함수를 받고,
// 그리고 그 함수를 실핼하고 싶은 시간 (실행할 시간 간격) 을 받습니다.
// function sayHi() {
//   console.log('say hi');
// }
// setInterval(sayHi, 3000);

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
