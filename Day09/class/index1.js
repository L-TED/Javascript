// class 는 오브젝트를 간단하게 사용할 수 있게 만들고, 데이터를 보호하기 용하다는 특징을 가지고 있다.
class Car {
  #name; // # 붙여서 외부에서 호출 못하게 방지, 보안 등급 상승
  #speed;

  constructor(name) {
    this.#name = name;
    this.#speed = 50;
  }
  speedUp(getSpeedUp) {
    this.#speed = this.#speed + getSpeedUp;
  }
  speedDown(getSpeedDown) {
    if (this.#speed - getSpeedDown > 0) {
      this.#speed = this.#speed - getSpeedDown;
    } else {
      this.#speed = 0;
    }
  }
}

const a = new Car("레전드차");
a.speedUp(100);
console.log(a);

const b = new Car("레전드똥차");
b.speedDown(100);

console.log(b);
