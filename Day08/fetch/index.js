// fetch: 서버 연결 함수, 연결 된 서버에서 데이터를 가져 올 수 있다.
// 브라우저와 사이트의 서버는 http(언어 매개와 같은 역할/ API/ 중간 매개) 로 연결
// http = request -> response
fetch("https://dummyjson.com/products") // url 내부의 데이터를 response 가 받음
  .then((res) => res.json()) // response 타입 => json 으로 변환
  .then((v) => {
    console.log(v.products.map((v) => ({ title: v.title })));
  });

// *json: 사람이 읽기 쉬운 텍스트 기반의 데이터 교환 형식, 애플리케이션 간에 데이터를 저장하고 주고받는 데 사용되는 표준 방식

const lat = 37.48943734577082;
const lon = 126.72433791600513;
const key = "69130b0d17bd6ecfc9d30e8bb64b9b07";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
)
  .then((res) => res.json())
  .then(console.log);

const lat1 = 43.061936;
const lon1 = 141.3542924;
const key1 = "69130b0d17bd6ecfc9d30e8bb64b9b07";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lon1}&appid=${key1}`
)
  .then((res) => res.json())
  .then(console.log);
