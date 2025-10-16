// 베른, 웰링턴, 타슈켄트, 도쿄, 로스 앤 젤레스, 런던
// 누르면 날씨(백그라운드 이미지로) 출력, 한국 및 현지 시간 출력
// 기본 백그라운드 이미지는 한국 날씨
const $ = (x) => document.querySelector(x);

const korea = $("#korea");
const swiss = $("#swiss");
const newZealand = $("#newZealand");
const uzbekistan = $("#uzbekistan");
const japan = $("#japan");
const unitedStates = $("#unitedStates");
const unitedKindom = $("#unitedKindom");

const bg = $("#bg");

const timeKr = $("#timeKr");
const timeOfCity = $("#timeOfCity");

//array 보다 object 로 { bupyeong { lat: ... , lon: ...}, ...} 으로 정리하는 것이 더 효율적
const arrCities = [
  {
    name: "한국: 부평",
    lat: 37.48943734577082,
    lon: 126.72433791600513,
    plusTime: 9,
  },
  { name: "스위스: 베른", lat: 46.9484742, lon: 7.4521749, plusTime: 2 },
  {
    name: "뉴질랜드: 웰링턴",
    lat: -41.2887953,
    lon: 174.7772114,
    plusTime: 13,
  },
  {
    name: "우즈베키스탄: 타슈켄트",
    lat: 41.3123363,
    lon: 69.2787079,
    plusTime: 5,
  },
  { name: "일본: 도쿄", lat: 35.6768601, lon: 139.7638947, plusTime: 9 },
  {
    name: "미국: 캘리포니아-로스앤젤레스",
    lat: 34.0536909,
    lon: -118.242766,
    plusTime: 17,
  },
  { name: "영국: 런던", lat: 51.5074456, lon: -0.1277653, plusTime: 1 },
];

const arrWeatherImage = [
  { weather: "clear", url: "/image/Sunny.jpg" },
  { weather: "Cloudy", url: "/image/Cloudy.jpg" },
  { weather: "Lightning", url: "/image/Lightning.jpg" },
  { weather: "mist", url: "/image/mist.jpg" },
  { weather: "Rainny", url: "/image/Rainny.jpg" },
  { weather: "Snowy", url: "/image/Snowy.jpg" },
];

const key = "69130b0d17bd6ecfc9d30e8bb64b9b07";

const weathers = (latNum, lonNum) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latNum}&lon=${lonNum}&appid=${key}`
  ).then((res) => res.json());

/*
(v) => v.weather[0].main: 날씨
종류: 
Clear 
Clouds
Thunderstorm 
Drizzle & Rain 
Snow 
Atmosphere -> mist
*/
const arrNumLat = (numVal) => arrCities[numVal].lat;
const arrNumLon = (numVal) => arrCities[numVal].lon;

const info = (country, arrNum) =>
  country.addEventListener("click", () => {
    weathers(arrNumLat(arrNum), arrNumLon(arrNum)).then(console.log);
    setInterval(() => {
      timeOfCity.innerText = `${
        new Date().getUTCHours() + arrCities.forEach((v) => v.plusTime) // 문제 있음
      }시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`;
    }, 1000);

    weathers(arrNumLat(arrNum), arrNumLon(arrNum))
      .then((v) => v.weather[0].main)
      .then(console.log);

    // if (
    //   weathers(arrNumLat(arrNum), arrNumLon(arrNum)).then(
    //     (v) => v.weather[0].main
    //   ) == "Clouds"
    // ) {
    //   bg.style.backgroundImage = `url("/image/Cloudy.jpg")`;
    //   bg.classList = "hello";
    // }
  });

info(korea, 0);
info(swiss, 1);
info(newZealand, 2);
info(uzbekistan, 3);
info(japan, 4);
info(unitedStates, 5);
info(unitedKindom, 6);

setInterval(() => {
  timeKr.innerText = `${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초`;
}, 1000);
