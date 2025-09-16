//Number화
//1. Numver() 사용하기
const a = Number("101");

//2. parseInt(), parseFloat()
//뒤에 문자를 만나면 그 앞까지 숫자화 시킴
const b = parseInt("101px"); // 101
const c = parseFloat("101.12cm"); // 101.12

//3. 단항연산자 -> +
const d = +"98"; // 98(숫자)
const d1 = "98" + "12"; // 9812

//+
//산술연산자: Number + Number
//문자연결연산자: String + String
//단항연산자: +Number or +String -> Number
