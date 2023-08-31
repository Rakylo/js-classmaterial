// a variable is a container for storing data
// a variable behaves as if it was the value that it contains

// Two steps:
// 1.Declaration (var, let ,const)
// 2.Assignment (=assignment operator)

// number data type:
// let age;
// age = 21;
// age = age + 1;
// console.log(age);

// string data type:

// let firstName = "Bro";
// console.log("Hello", firstName);

// boolean(true or false) data type:

// let student = true;
// console.log(student);

// KITAS SKYRIUS %%%%%%%%%%%%%%%%%%%%%%%

// document.getElementById("p1").innerHTML = "hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;

// arithmetic expression is a combination off...
// operands (values, variables, etc.)
// operators (+ - * / %)  modules operator = %
// that can be evaluated to a value
// example. y = x +5;

// let students = 21;
// students += 1;
// console.log(students);
// let extraStudents = students % 3;
// console.log(extraStudents);

// operator precedance
// 1. perenthesis ()
// 2. exponents
// 3.mutliplication & division
// 4. addition & subtraction

// let result = 1 + 2 * (3 + 4);
// console.log(result);

// KITAS SKYRIUS %%%%%%%%%%%%%%%%%%%%%%%

// How to accept user input
// 1. easy way with a window prompt:

// let username = window.prompt("Whats ur name?");
// console.log(username);

// 2. difficult way HTML textbox:
// let username;
// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);
//   document.getElementById("myLabel").innerHTML = username;
// };

// KITAS SKYRIUS %%%%%%%%%%%%%%%%%%%%%%%

// Type Conversion = change the datatype of a value to another
// strings, numbers, booleans;

// let age1 = window.prompt("How old are you?");
// console.log(typeof age1);
// age1 = Number(age1);
// age1 += 1;
// console.log("Happy Birthday!", age1, "years old");

// let x;
// let y;
// let z;
// x = Number("3.14");
// y = String(3.14);
// z = Boolean("");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// KITAS SKYRIUS %%%%%%%%%%%%%%%%%%%%%%%

// const = a variable that can't be changed

// const pi = 3.4159;
// let radius;
// let curcumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log("the circumference is:", circumference);

// KITAS SKYRIUS %%%%%%%%%%%%%%%%%%%%%%%

// let x = 3.14;
// let y = 5;
// let z = 9;

// let maximum;
// let minimum;

// x = Math.round(x); round- apvalina skaiciu

// x = Math.floor(x); floor apvalina i apacia

// x = Math.ceil(x); ceil apvalina i virsu

// x = Math.pow(x, 2); pow pakelia skaiciu turi duot dvi reiksmes

// x = Math.sqrt(x); saknis is skaicis

// x = Math.abs  kiek truksta iki 0 , duos sveika skaiciu jeigu minusas

// maximum = Math.max(x, y, z); isrinks didziausia skaiciu is duotu
// minimum = Math.min(x, y, z); isrinks maziausia skaiciu is duotu

// console.log(minimum);

// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("Side C:", c);

//
