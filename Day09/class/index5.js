class Student {
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }
}

class CollegeStd extends Student {
  #major;
  #courses;
  constructor(id, name, major) {
    super(id, name);
    this.#major = major;
    this.#courses = [];
  }
  register(course) {
    this.#courses.push(course);
  }
}

class HighSchoolStd extends Student {
  #grade;
  #classroom;
  constructor(id, name, grade, classroom) {
    super(id, name);
    this.#grade = grade;
    this.#classroom = classroom;
  }
}

console.log(new HighSchoolStd("id: 14", "김민수", "11 grade", "classroom 3"));
