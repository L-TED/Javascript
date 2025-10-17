class NewMath {
  static add(x, y) {
    // *static: 정적 메서드, 클래스의 인스턴스(new) 없이 호출이 가능
    return x + y;
  }
  static minus(x, y) {
    return x - y;
  }
}

const a = NewMath.add(2, 1);
const b = NewMath.minus(2, 1);

console.log(a);
console.log(b);
