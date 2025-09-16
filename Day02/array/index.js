// array
const a = ["A", 1, 0];

console.log(a[2]); // 0
console.log(a[4]); // undefined
a[3] = "B"; // 세번째 추가
delete a[0];
console.log(a);
