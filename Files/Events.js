const EventEmitter = require("events"); // it is defualt module available in node
const eventEmitter = new EventEmitter();

// Event should by emited by user it could be any type of event to emit
// event emitr performs certain task whenever even emits

eventEmitter.on("tutorial", () => {
  console.log("Event Has Occured");
});
setTimeout(() => {
  eventEmitter.emit("tutorial"); // Event will emit after 3s
}, 3000);

// We can extend events to our classes as follows

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let Sakhi = new Person("Sakhi");

Sakhi.on("name", () => {
  console.log("My Name is " + Sakhi.name);
});

Sakhi.emit("name");
