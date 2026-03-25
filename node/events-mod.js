import EventEmitter from "events";

const eventEmitter = new EventEmitter();

// eventEmitter.emit();

// eventEmitter.on();

// start event

// listener of event
eventEmitter.on("start", (date, arg2, arg3) => {
  console.log(`start was triggered at ${date}`);
});

// source of event
eventEmitter.emit("start", Date.now(), 423, 34543);

///
