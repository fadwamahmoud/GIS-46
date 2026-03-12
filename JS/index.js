const myObject = {
  property: "value",
  otherProp: 945875844,
  "prop with space": function () {},
};

console.log(myObject.property);
console.log(myObject["prop with space"]);

const abdelrahman = "abdelrahman";

console.log(myObject.variable);

// console log value of propert "property" inside myObject using variable "variable"
console.log(myObject[abdelrahman]);

// USING OBJECTS AS DATA STRUCTURE

// without objects
const playerOneName = "ahmed";
const playerTwoName = "menna";
const playerTwoAge = 20;

const playerOne = {
  name: "ahmed",
  age: 20,
  strategy: "ehjqdiqk",
  weapon: "dhjugsaghdj",
  hd: "dhjuskhads",
  colour: "djksajdkla",
};

const playerTwo = {
  name: "menna",
  age: 20,
};

function gameOver(winningPlayer) {
  console.log(`${winningPlayer.name} ${winningPlayer.age} game over`);
}
gameOver(playerOne);

// OBJECT AS A DESIGN PATTERN
// example

// car : make, model, year, price, color....
// applydiscount, getSummary

const car = {
  make: "bmw",
  model: "m3",
  year: 2003,
  price: 300000,
  color: "blue",
  applyDiscount: function (percentage) {
    const mult = (1 - percentage) / 100;
    this.price = this.price * mult;
  },
  getSummary() {
    console.log(car.color);

    console.log(`${this.color}`, `${this.model}, ${this.make}`);
  },
};

car.getSummary();

// USE OBJECTS TO UNDERSTAND ABSTRACT CONCEPTS

// game

const rockPaperScissors = {
  playerScore: 0,
  computerScore: 0,
  playRound(playerChoice) {
    // logic
  },
  getWinningPlayer() {},
  restartGame() {},
};

rockPaperScissors.playRound("rock");
rockPaperScissors.playRound("paper");
rockPaperScissors.restartGame();

// inventory object
// event listener
// DOM

// object as a machine
// screen => properties are displayed
// buttons: can be cliocked to do different stuff

// OBJECT CONSTRUCTORS
