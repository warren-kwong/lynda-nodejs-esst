const EventEmitter = require('events').EventEmitter;
const util = require('util');

let Person = function(name) {
  this.name = name;
};

// add EventEmitter to Person prototype
util.inherits(Person, EventEmitter);

let ben = new Person('Benjamin Franklin');

ben.on('speak', function(phrase) {
  console.log(`${this.name}: ${phrase}`);
});

ben.emit('speak', 'You may delay, but time will not.');
