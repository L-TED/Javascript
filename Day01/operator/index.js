//Operator [연산자]
//산술 연산자
const a = 1 + 3; // 4, 덧셈 연산자
const a1 = 1 - 3; // 2, 뺄셈 연산자
const a2 = 2 * 2; // 4, 곱셈 연산자
const a3 = 3 / 2; // 1.5, 나눗셈 연산자
const a4 = 2 % 3; // 2, 나머지 연산자
const a5 = 2 ** 3; // 8, 제곱 연산자

//대입 연산자
const b = "가나다"; // 대입 연산자

//비교 연산자 [boolean 타입으로 귀결]
const c = 5 > 3; // true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // true`
const c3 = 5 <= 3; // false
const c4 = 1 == 2; // 같은 값인가 / false
const c5 = 1 != 2; // 다른 값인가 / true
const c6 = 1 === 1; // type 의 동일성 확인 / false

//논리 연산자
//&&(and) ||(or) !(not)

//&&: 모두 true일 때 true
const d = 3 > 0 && 5 > 0 && 7 > 0; //true
const d1 = 3 > 0 && 5 > 0 && 7 < 0; //false

//||: 하나라도 틀릴 때 false
const d2 = 3 > 0 || 5 > 0 || 7 < 0; // true
const d3 = 1 == 2 || 3 == 4; // false

// !: 불리언의 반대 = NOT / -
const d4 = !true; // false
const d5 = !(5 > 3); // false
const d6 = !!(5 != 5); // false

const d7 = !(5 <= 3) || !(3 > 10);
const d8 = 5 > 3 && 3 <= 10; // d7 와 같음

//삼항 연산자
// ?
// 조건식 ? 데이터 A : 데이터 B

const e = 5 > 3 ? "A" : "B";
const e1 = false ? "A" : "B";
const e2 = "A" == "B" ? "C" : "D";
