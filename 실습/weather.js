console.log('weather.js 👀');
const weather = document.querySelector('.js-weather');
const COORDS = 'coords';
const API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';

function getWeather(lat, lon) {
  const getAPI = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  console.dir(getAPI);
  getAPI
    .then((response) => {
      // console.dir(response.json());
      // console.dir(JSON.parse(response)); // error
      return response.json();
    })
    .then((json) => {
      console.log(json);
      console.dir(json);
      const temperature = json.main.temp;
      const place = json.name;
      const maxTemp = json.main.temp_max;
      const minTemp = json.main.temp_min;
      const humidity = json.main.humidity;
      const feelsLike = json.main.feels_like;
      weather.innerText = `현재온도: ${temperature}도  위치: ${place} 체감온도: ${feelsLike} 최고온도: ${maxTemp} 최저온도: ${minTemp} 습도: ${humidity}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// TODO: 위치정보를 가져오지 못 했을때 실행되는 함수 입니다.
function handleGeoError() {
  console.log('위치정보를 얻어오는데 실패 했습니다.');
}

// TODO: 위치정보를 성공적으로 가져왔을때 실행되는 함수 입니다.
function handleGeoSucces(position) {
  console.dir(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(coordsObj.latitude, coordsObj.longitude);
}

// TODO: 저장된 위치가 없을시 위치를 물어봅니다.
function askForCoords() {
  console.dir(navigator);
  console.dir(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadcoords() {
  const loadedcoords = localStorage.getItem(COORDS);
  console.log(loadedcoords);
  console.log(typeof loadedcoords);
  console.log(loadedcoords instanceof Object);
  if (loadedcoords === null) {
    askForCoords();
  } else {
    // get Weather
    const parseCoords = JSON.parse(loadedcoords);
    console.log(parseCoords);
    console.log(typeof parseCoords);
    console.log(parseCoords instanceof Object);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

// TODO: 페이지 로드와 함께 초기화 시켜 줍니다.
function init() {
  loadcoords();
}

init();
