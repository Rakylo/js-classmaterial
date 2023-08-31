class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    return this.age >= 20
      ? `${this.name} is old enough to drink`
      : `${this.name} is not old enough to drink`;
  }
}

const p1 = new Person("Petras", 10);
console.log(p1.compareAge());

const filterOutLetters = (arr) =>
  arr.filter((element) => typeof element === "number");
console.log(filterOutLetters([1, 5, "a", "g", "z", 6]));

const duplicateAllLetters = (text) =>
  text
    .split("")
    .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
    .join("");
console.log(duplicateAllLetters("Petras 123 Slekys"));
