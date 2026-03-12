// OBJECT CONSTRUCTORS
// create copies (instances) of objects

function PlayerConstructor(name, age) {
  if (!new.target) {
    // throw Error("You must use the new operator to call a constructor");
  }
  this.name = name;
  this.age = age;
  sayHello = function () {
    // console.log("");
  };
}

const playerThree = new PlayerConstructor("mai", 20);
// console.log("playerThree.sayHello", playerThree.sayHello());

// prototype => laterr

PlayerConstructor("mai", 20);

// prototype [[Prototype]] => object from which the original object inherets from
// and it can use  all its methods and properties

// 1. All objects have [[Prototype]]
// console.log(Object.getPrototypeOf(playerThree) === PlayerConstructor.prototype);

// Protoype => exists in alll objects

// Prototypal inheritance
PlayerConstructor.sayHello = function () {
  console.log("Hello!!");
  return "hello";
};

console.log(
  Object.getPrototypeOf(PlayerConstructor.prototype) === Object.prototype,
);
// console.log();

Object.prototype.sayHello = function () {
  console.log("fhjkfhkads");
};

const testObject = new Object();
testObject.sayHello();

// best practices
// unexpected behaviour
// libraries => break
// Object => javascript

// sayHello(obj){

// }

// javascript uses prototype chain

// playerOne  => prototype of PLayerCOnst=> prototype => => => Object => undefined
