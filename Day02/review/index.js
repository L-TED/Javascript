//1
const score = window.prompt("점수를 입력하십시오.");
const result = score >= 60 ? "합격입니다." : "불합격입니다.";
window.console.log(`${result}`);
//2
const numA = window.prompt("첫 번째 숫자를 입력하십시오.");
const numB = window.prompt("두 번째 숫자를 입력하십시오.");
const finalNum = numA > numB ? numA : numB;
window.console.log(finalNum);
//3
const numC = window.prompt("숫자를 입력하십시오.");
const numId = numC > 0 ? "양수" : "음수";
window.console.log(`${numC == 0 ? "0" : numId}`);
//4
const numD = window.prompt("정수 하나를 입력하십시오");
const numE = 1 > numD % 2 ? "짝수" : "홀수";
window.console.log(numE);
