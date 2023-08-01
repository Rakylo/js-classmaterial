function sayHello(name, age = 10) {
  console.log("Hello " + name);
  console.log("Your age is " + age);
}
sayHello("Martynas", 20);
sayHello("Andrius", 34678);
sayHello("Bobas");

const num = 12;

function addNumber(x, y) {
  const sum = x + y;
  console.log(num);

  function hello() {
    console.log("inside a function");
  }
  hello();

  return sum;
}
const sum = addNumber(3, 5);
console.log(sum);
console.log(addNumber(10, 50));

function findBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(findBiggest(100, 500));

function checkAge(age) {
  return age > 18 ? true : confirm("Ar tikrai?");
  //   if (age > 18) {
  //     return true;
  //   } else {
  //     return confirm("Ar tikrai?");
  //   }
}
// console.log(checkAge(19));

min(1, 5);

function min(x, y) {
  if (x < y) {
    return x;
  } else if (y < x) {
    return y;
  } else {
    return "Jie yra lygus";
  }
}
console.log(min(1, -6));
console.log(min(1, 1));

const func1 = function (name) {
  console.log("Hello " + name);
};
func1("Vytautas");

// arrowFunction =>

const arrowFunction = (name) => {
  console.log(name);
};
arrowFunction("Matas");

const sumFunc = (x, y) => x + y;

console.log(sumFunc(5, 7));
