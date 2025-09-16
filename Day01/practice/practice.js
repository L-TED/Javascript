const numA = window.prompt("숫자 입력");
const numB = window.prompt("숫자 입력");

const result = Number(numA) > Number(numB);

window.console.log(result ? `${numA * numB}` : `${numA / numB}`);
