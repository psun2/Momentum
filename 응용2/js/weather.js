// import axios from '../axios';

const COORDS_LS = 'coords',
  API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';

const getWeathwe = (lat, lon) => {
  // const getWeathwe = async (lat, lon) => {
  // console.log(parseded);
  // await axios
  //   .get(
  //     'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}',
  //   )
  //   .then(console.log('gkdl'));
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  )
    .then((response) => {
      // console.log(response);
      // console.dir(response);
      return response.json();
    })
    .then((json) => {
      // console.log(json);
      // console.dir(json);
      const h1 = document.createElement('h1');
      h1.innerText = `${json.main.temp}도 @ ${json.weather[0].main} @ ${json.name}`;
      h1.className = 'js-weather';
      const body = document.querySelector('body');
      body.appendChild(h1);
    });
};

// const saveCoords = (coordsObj) => {
//   // console.log(coordsObj);
//   // localStorage.setItem(COORDS_LS, coordsObj);
//   // console.log(localStorage.getItem(COORDS_LS));
//   const stringify = JSON.stringify(coordsObj);
//   localStorage.setItem(COORDS_LS, stringify);
//   // console.log(localStorage.getItem(COORDS_LS));
// };

const handleSuccess = (position) => {
  // console.dir(position);
  // console.dir(position.coords.latitude);
  // console.dir(position.coords.longitude);
  const coordsObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  // saveCoords(coordsObj);
  getWeathwe(coordsObj.latitude, coordsObj.longitude);
};

const handleError = () => {
  throw Error('위치 정보를 가져오는데 실패 했습니다.');
};

const askForCoords = () => {
  // console.dir(navigator);
  // console.dir(navigator.geolocation);
  // console.dir(navigator.geolocation.getCurrentPosition);
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};

const loadWeather = () => {
  askForCoords();
  // const currentCoords = localStorage.getItem(COORDS_LS);
  // if (currentCoords === null) {
  //   askForCoords();
  // } else {
  //   // console.log(currentCoords, typeof currentCoords);
  //   const parseded = JSON.parse(currentCoords);
  //   // console.log(parseded, typeof parseded);
  //   getWeathwe(parseded.latitude, parseded.longitude);
  // }
};

function init() {
  console.log('weather.js init ✨');
  loadWeather();
}

init();
