const age = window.prompt("나이를 입력하십시오");

window.console.log(age >= 20 ? "성인입니다." : "미성년자입니다.");

const height = window.prompt("키를 입력하십시오");

window.console.log(
  height >= 140
    ? "해당 놀이기구를 탑승 하실 수 있습니다."
    : "해당 놀이기구를 탑승 하실 수 없습니다."
);

const number = window.prompt("숫자(정수)를 입력하십시오");

window.console.log(number > 0 ? "양수 입니다." : "0또는 음수입니다.");
