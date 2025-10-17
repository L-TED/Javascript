/*
축구 선수 클래스
- 이름
- 포지션
- 나이
- 연봉 + 포지션 변경 함수

축구팀 클래스
- 이름
- 선수[]
- 감독
- 선수 등록/ 선수 삭제 함수
*/

class Players {
  name;
  position;
  age;
  income;
  constructor(name, position, age, income) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.income = income;
  }
  changePosition(changing) {
    this.position = changing;
  }
}
class Team {
  name;
  players;
  director;
  constructor(name, director) {
    this.name = name;
    this.director = director;
    this.players = [];
  }

  listPlayer() {
    console.log(this.players);
  }

  addPlayer(add) {
    this.players.push(add);
  }
  removePlayer(name) {
    this.players = this.players.filter((v) => v.name != name);
  }
}

const a = new Players("김철수", "MF", "21", "4천만원"); // instance
a.changePosition("FK");
const b = new Team("부평 FC", "김석근");
b.addPlayer("고길동");
b.addPlayer("김기명");
b.removePlayer("고길동");
console.log(a);
console.log(b);
b.listPlayer();
