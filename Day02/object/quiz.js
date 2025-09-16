// mbti
// const mbti1 = prompt("MBTI 입력: E or I");
// const mbti2 = prompt("MBTI 입력: S or N");
// const mbti3 = prompt("MBTI 입력: T or F");
// const mbti4 = prompt("MBTI 입력: J or P");
// const mbti = {
//   E: "e",
//   I: "i",
//   S: "s",
//   N: "n",
//   T: "t",
//   F: "f",
//   J: "j",
//   P: "p",
// };

// alert(`${mbti[mbti1]}${mbti[mbti2]}${mbti[mbti3]}${mbti[mbti4]}`);

// 띠 계산
// const birth = +prompt("몇 년생?") % 12;

// const animal = {
//   0: "원숭이띠",
//   1: "닭띠",
//   2: "개띠",
//   3: "돼지띠",
//   4: "쥐띠",
//   5: "소띠",
//   6: "호랑이띠",
//   7: "토끼띠",
//   8: "용띠",
//   9: "뱀띠",
//   10: "말띠",
//   11: "양띠",
// };

// alert(`${animal[birth]}입니다.`);

// 티켓 가격 계산
// 영화 종류/ 나이/ 간식/ 좌석 등급 입력 => 최종 결제 금액
// 7세 이하 50% / 8~19세 30% / 65세 이상 무료

const movies = +prompt(
  "영화 선택: 1: 일반(12,000 원) / 2: 3D(15,000 원) / 3: IMAX(18,000 원)"
);
const age = +prompt("나이 입력");
const foods = +prompt(
  "팝콘 및 음료: 1: 팝콘(5,000 원) / 2: 음료(2,000 원) / 3: 없음"
);
const seats = +prompt(
  "좌석 선택: 1: 일반(0 원) / 2: 프리미엄(5,000 원) / 3: VIP(10,000 원)"
);

const movie = {
  1: 12000,
  2: 15000,
  3: 18000,
};

const food = {
  1: 5000,
  2: 2000,
  3: 0,
};

const seat = {
  1: 0,
  2: 5000,
  3: 10000,
};

if (age <= 7) {
  alert(`${movie[movies] * 0.5 + food[foods] + seat[seats]}원`);
} else if (8 <= age && age <= 19) {
  alert(`${movie[movies] * 0.7 + food[foods] + seat[seats]}원`);
} else if (65 <= age) {
  alert(`${movie[movies] * 0 + food[foods] + seat[seats]}원`);
}
