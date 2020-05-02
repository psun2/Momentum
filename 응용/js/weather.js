const weather = document.querySelector('.js-weather');

const COORDS = 'coords';
const API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';

function handleLoad() {
  console.log('API를 성공적으로 가져왔습니다.');
}

function getWeather(lat, lon) {
  console.log(lat, lon);
  const getAPI = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  console.dir(getAPI);
  getAPI.then((response) => console.log(response));
  getAPI
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const info = {
        place: json.name,
        temperature: json.main.temp,
        currentWeather: json.weather[0].main,
      };
      console.log(info);
      weather.innerText = `${info.place} @ ${info.temperature}도 @ ${info.currentWeather}`;
    });
}

function saveCoords(coordsObj) {
  console.log('saveCoords');
  const str = JSON.stringify(coordsObj);
  console.dir(str);
  localStorage.setItem(COORDS, str);
}

function handleGeoError() {
  throw Error('위치 정보를 가져오는데 실패 했습니다.');
}

function handelGeoSucces(position) {
  console.log(position);
  console.dir(position);
  //   const latitude = position.coords.latitude;
  //   console.dir(latitude);
  const coordsObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  console.log(coordsObj);
  saveCoords(coordsObj);
  console.dir(coordsObj.latitude);
  console.dir(coordsObj.longitude);
  getWeather(coordsObj.latitude, coordsObj.longitude);
}

function askForCoords() {
  console.dir(navigator);
  console.dir(navigator.geolocation);
  console.dir(navigator.geolocation.getCurrentPosition);
  navigator.geolocation.getCurrentPosition(handelGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  console.log(loadedCoords); // null
  if (loadedCoords === null) {
    askForCoords();
  } else {
    console.log(loadedCoords);
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
