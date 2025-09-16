const num = +window.prompt("숫자 입력");
if (num > 0) {
  window.console.log(`${num}은 0보다 큽니다.`);
} else if (num == 0) {
  window.console.log(`0입니다.`);
} else {
  window.console.log(`${num}은 0보다 작습니다.`);
}
window.console.log("프로그램 종료");
