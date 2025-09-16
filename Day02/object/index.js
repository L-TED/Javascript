// 기본 타입: string, number, boolean, undefined, Null(값이 없음)
// 참조 타입: object

// key - value
// key 는 중복 불가능
// value 는 타입과 관계 없이 모두 중복 가능
const car = {
  name: "자동차",
  brand: "현대",
  price: 30000000,
  color: "흰색",
};

console.log(car);
console.log(car.color); // dot 접근
console.log(car["color"]); // bracket 접근
console.log(car.capasity); // 존재하지 않음 => undefined

car.option = "날개"; // 추가

delete car.price; // 삭제

car.color = "회색"; // 업데이트, 변경

// 선생 이름 나이 mbti 학생수 과목 수업시간
const course = {
  teacher: {
    name: "전수효",
    age: 33,
    mbti: "ENTJ",
  },
  headcount_std: 12,
  course_name: "풀스택",
  schedule: "9시 30분 ~ 18시 30분",
};

console.log(course);
console.log(course.teacher.name);
