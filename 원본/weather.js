// TODO: API(Applocation Programing Interface) 는 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단입니다.
const weather = document.querySelector('.js-weather');

const API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';
const COORDS = 'coords';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${API_KEY}`,
  )
    .then(function (response) {
      console.log('response 실행');
      console.log(response);
      // console.log(response.json());
      return response.json();
    })
    .then(function (json) {
      console.log('json 실행');
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

// TODO: 위치정보를 저장합니다.
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// TODO: 좌표를 성공적으로 가져왔을때 처리하는 함수 생성
function handleGeoSucces(position) {
  console.log(position);
  console.log(position.coords.latitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //   const coordsObj = {
  //     latitued: latitude,
  //     longitude: longitude,
  //   };
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

// TODO: 좌표를 가져오지 못했을때 처리하는 함수 생성
function handleGeoError() {
  console.log('Cant access geo location');
}

// TODO: 좌표를 요청하는 함수 생성
function askForCoords() {
  console.log(navigator);
  console.dir(navigator);
  console.dir(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
