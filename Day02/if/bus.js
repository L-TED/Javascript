const fare = prompt("이용 버스 번호 1: 시내버스 2: 광역버스 3: 마을버스");
const age = prompt("나이");

const fareN =
  fare == "1" ? 1200 : fare == "2" ? 2000 : fare == "3" ? 1000 : "다시 입력";

if (age >= 65 || age <= 7) {
  window.console.log(`무료`);
} else if (age >= 8 && age <= 19) {
  window.console.log(`${fareN * 0.7}원`);
} else {
  window.console.log(`${fareN}원`);
}
console.log("버스 요금 결제");
// 1: 1200 2: 2000 3: 1000 (8~19 : 30% 할인)
// 7 이하 65 이상: 0, 8~19 : 30% 할인
