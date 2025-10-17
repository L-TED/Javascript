/*
const a1 = {
  name: "americano",
  price: 4800,
  shots: 2,
  size: "tall",
  discount: function (b) {
    this.price = this.price * b;
  },
};
const a2 = {
  name: "americano",
  price: 5300,
  shots: 3,
  size: "grande",
  discount: function (b) {
    this.price = this.price * b;
  },
};
const a3 = {
  name: "iceLatte",
  price: 6600,
  shots: 4,
  size: "grande",
  discount: function (b) {
    this.price = this.price * b;
  },
};
const makeCoffee = (name, price, shots, size, b) => {
    const newPrice = price  
    const discount = (b) => {}
  return { name, price, shots, size, discount:discount };
};

*/

// class: 오브젝트와 함수를 만들어주는 문법__변수 및 함수(초기화/일반), 하나의 constructor 를 가질 수 있다.
class coffee {
  name;
  price;
  shots;
  constructor(a, b, c) {
    this.name = a;
    this.price = b;
    this.shots = c;
  }
}

const A = new coffee("아메리카노", 4800, 2); // coffee 클래스 내부 constructor 반환
console.log(A); // coffee 오브젝트 반환: coffee {name: '아메리카노', price: 4800, shots: 2}

/* 
 class
 - 축구팀
 - 팀명, 팀원 수, 팀 감독, 팀 창설 연도
*/
class FootBall {
  name;
  member;
  dir;
  found;
  constructor(name, dir, found) {
    this.name = name;
    this.member = [];
    this.dir = dir;
    this.found = found;
  }
  registerMember(members, numbers) {
    this.member.push({ members, numbers });
  }
}

const B = new FootBall("서울 FC", "김철수", "2025 년");
B.registerMember("신짱구", 5);
B.registerMember("이맹구", 7);
console.log(B);
