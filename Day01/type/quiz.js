const A = window.prompt("정사각형의 한 변의 길이 입력");

window.console.log(`한 변의 길이가 ${A} 인 정사각형의 넓이: ${A * A}`);

const B = window.prompt("삼각형의 밑변 길이 입력");
const C = window.prompt("삼격형의 높이 입력");

window.console.log(`밑변 ${B} 과 높이 ${C} 인 삼각형이 넓이: ${(B * C) / 2} `);

const D = window.prompt("엔화로 환산할 원화 입력");

window.console.log(`${D} 원은 ${D / 9.41} 엔 입니다`);

const E = window.prompt("초로 환산할 분 입력");

window.console.log(`분: ${E} 초: ${E * 60}`);
