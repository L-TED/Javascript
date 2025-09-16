// const score = +window.prompt("점수 입력");
// if (score >= 90) {
//   window.console.log("A 등급");
// } else if (score >= 80) {
//   window.console.log("B 등급");
// } else if (score >= 70) {
//   window.console.log("C 등급");
// } else if (score >= 60) {
//   window.console.log("D 등급");
// } else if (score >= 50) {
//   window.console.log("E 등급");
// } else {
//   window.console.log("낙제");
// }
// window.console.log("점수 확인");

const numInt = +window.prompt("정수 입력");
if (numInt > 0 && numInt % 2 == 0) {
  console.log("양의 짝수");
} else if (numInt < 0 && numInt % 2 == 0) {
  console.log("음의 짝수");
} else if (numInt > 0 && numInt % 2 == 1) {
  console.log("양의 홀수");
} else if (numInt < 0 && numInt % 2 == -1) {
  console.log("음의 홀수");
} else {
  console.log("0");
}
