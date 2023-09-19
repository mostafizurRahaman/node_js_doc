// //  import event :
// const event = require("events");

// //  create an event Emitter:
// const eventEmitter = new event.EventEmitter();

// //  create an event handler :
// const chitkardibo = () => {
//    console.log("oi beta koi tui.");
// };

// //  assign the handler into event :
// eventEmitter.on("chitkkar", chitkardibo);

// // emit or fire the event :

// eventEmitter.emit("chitkkar");

const event = require("events");

//  create an event Emitter :
const eventEmitter = new event.EventEmitter();

//  create an event handler :
const handleWriteCode = () => {
   console.log("Colo Node Js shiki and likhi");
};

const handleRead = () => {
   console.log("learn the file that you created");
};

//  assign the handler into event :
eventEmitter.on("write", handleWriteCode);
eventEmitter.on("read", handleRead);

// emit or fire the event :
eventEmitter.emit("write");
eventEmitter.emit("read");
