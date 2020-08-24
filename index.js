/* String
const what = "yong";
*/

/*
Boolean
const wat = true or false
it is not a text
*/

/*
Number
const wat = 777;
*/

/*Float
const wat = 55.1;
*/

/* Array
    const daysOfWeek = [mon to sun etc.]
*/

/*
const yongInfo = {
  name: "yong",
  age: 30,
  gender: "male",
  ishandsome: true,
  favMovies: ["along the god", "lotr", "oldboy"],
};
console.log(yongInfo.favMovies);
*/

/*
function info(name, age) {
  console.log("hello", name, "your age is", age);
}

info("yong", 15);
*/
/*
function sayHello(name, age) {
  return `hello ${name} you are ${age} years old`;
}

const greetYong = sayHello("yong", 300);

console.log(greetYong);
*/

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const mul = calculator.mul(5, 5);
const div = calculator.div(5, 5);
console.log(plus);
console.log(minus);
console.log(mul);
console.log(div);
