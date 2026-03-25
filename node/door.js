import EventEmitter from "events";
// Event listener => 2 built in events
// 1. newListener => when a new listener is added
// 2. removeListener => when a listener is removed

const door = new EventEmitter();

const doSomething = () => {
  console.log("slammed!!!");
};
door.on("slam", doSomething);

door.emit("slam"); //emit the event "slam"

console.log(door.eventNames());

// cleanup => memory
door.removeListener("slam", doSomething);
console.log(door.eventNames());
