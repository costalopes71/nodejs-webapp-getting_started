const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// I can emitt my on events
eventEmitter.on('lunch', () => console.log('yummm'));

eventEmitter.emit('lunch');

console.log('Hello world');

// exit event will trigger the annonymous function
process.on('exit', () => console.log('sainu'));

// using global namespace I can set global variables for example
global.luckyNumber;
console.log(global.luckyNumber);

global.luckyNumber = 23;
console.log(global.luckyNumber);

// with global variable process I can access system properties
console.log(process.platform);
// i can get the server enviroment variable
console.log(process.env.USER);

eventEmitter.emit('lunch');