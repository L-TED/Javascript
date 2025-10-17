// class 대학생
// 학번, 이름, 전공, 수업

class CollegeStd {
  #id;
  #name;
  #major;
  #courses;
  constructor(id, name, major) {
    this.#id = id;
    this.#name = name;
    this.#major = major;
    this.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}

class Courses {
  #name;
  #professor;
  #time;
  constructor(name, professor, time) {
    this.#name = name;
    this.#professor = professor;
    this.#time = time;
  }
}

const a = new CollegeStd(401, "개똥이", "컴퓨터공학");
a.register(new Courses("신경과학", "소똥이", "09:00"));

console.log(a);
