/*
 Unit 클래스 작성
   - 필드: name, emoji, hp
   - 메소드: 
    attack 함수, status 함수
     - attack 함수: "{emoji} {name}이(가) 공격했다" 출력
     - status 함수: 남은 hp 출력
   
 Hero 클래스 작성 [Unit 상속]
   - 필드: skills
   - 메소드: 
    activate 함수
     - activate 함수: "{skills}을(를) 발동했다" 출력

 Monster 클래스 작성 [Unit 상속]
   - 필드: level
*/
class Unit {
  #name;
  #emoji;
  #hp;
  constructor(name, emoji, hp) {
    this.#name = name;
    this.#emoji = emoji;
    this.#hp = hp;
  }
  attack() {
    return `${this.#emoji} ${this.#name} 이(가) 공격했다!`;
  }
  status() {
    return `현재 체력: ${(this.#hp = this.#hp)}`;
  }
}
class Hero extends Unit {
  #skills;
  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp);
    this.#skills = skills;
  }
  activate() {
    return `${this.#skills} 을(를) 발동했다!`;
  }
}
class Monster extends Unit {
  #level;
  constructor(name, emoji, hp, level) {
    super(name, emoji, hp);
    this.#level = level;
  }
}

const hero = new Hero("존 나르센", "🤴🏻", 100, "베기");
const monster = new Monster("오니", "👹", 50, 10);

console.log(hero);
console.log(hero.attack());
console.log(hero.status());
console.log(hero.activate());

console.log(monster);
console.log(monster.attack());
console.log(monster.status());
