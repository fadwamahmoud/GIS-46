// Scopes
// variable => access ?????????

// function scoped
// var => available inside the function in which it was declared

// ECMAScript6
// let => block
// const => block
let globalAge = 23;

function printAge(age) {
  // function scoped var
  var ageVar = 34;

  if (age > 0) {
    const ageConst = age * 2;
    // console.log({ ageConst });
  }

  //   console.log({ age });

  //   console.log({ ageConst });
}

// printAge({ globalAge });
// console.log({ ageVar });

// printAge(40);

// CLOSURES
function makeAddingFunction(firstNumber) {
  firstNumber;
  // firstNumber is scoped anywhere inside makeAddingFunction
  return function returnedFunction(secondNumber) {
    return firstNumber + secondNumber;
  };
}

const addEight = makeAddingFunction(8);
const addOne = makeAddingFunction(1);

const addFive = makeAddingFunction(5);

// console.log(addFive(2));
// console.log(addEight(4));
// console.log(addOne(4));

function addTwoAndNumber(number) {
  return 2 + number;
}
function addTwoNumbers(int1, int2) {
  return int1 + int2;
}
function addTwoNumber(int1, int3) {
  return;
}

// closure : function + surrounding context (lexical environment) all declared variables

//constructor => safeguards
// (!new.target)

function OtherConstructor(ayhaga) {
  this.ayhaga = ayhaga;
}

// const playerOne = new PlayerConstructor()
// (playerOne instanceof PlayerConstructor) => true
// playerOne.prototype = OtherConstructorther
// constructors in javascript is not preferred

// pattern => Factory function

// Factory funnction instead of constructors to create objects
// closures
// no prototype

function User(name) {
  this.name = name;
  this.email = name + "@gmail.com";
}

// factory function
function createUser(name) {
  const email = name + "@gmail.com";

  // private
  let age = 0;
  const getAge = () => {
    return age;
  };
  const IncreaseAge = () => {
    age++;
  };

  return { name, email, getAge, IncreaseAge };
}

// clean code

const user = createUser("abdelrahman");
// console.log(user.getAge());
// console.log(user.IncreaseAge());
// console.log(user.getAge());

// Module pattern

// IIFE
// this is a function expression
// () => console.log("maslan");

// (() => console.log("this is an iife"))();

// implement module pattern
// es6
// modules => import

const calculator = (() => {
  let lastResult;

  const add = (a, b) => {
    lastResult = a + b;
    return lastResult;
  };
  const subtract = (a, b) => {
    lastResult = a - b;
    return lastResult;
  };

  const getLastResult = () => lastResult;

  return { add, subtract, getLastResult };
})();

console.log(calculator.add(3, 5));
console.log(calculator.getLastResult());
console.log(calculator.lastResult);
