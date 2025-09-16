const classroom = [
  { name: "A", capcity: 20, student: 18, lecture: "java" },
  { name: "B", capcity: 20, student: 19, lecture: "javascript" },
  { name: "C", capcity: 20, student: 20, lecture: "python" },
];

const course = prompt("java, javascript, python");

if (classroom[0].lecture == course) {
  classroom[0].student = classroom[0].student + 2;
} else if (classroom[1].lecture == course) {
  classroom[1].student = classroom[1].student + 1;
} else if (classroom[2].lecture == course) {
  alert(`불가`);
} else {
  console.log("없는 과목");
}

console.log(classroom);
