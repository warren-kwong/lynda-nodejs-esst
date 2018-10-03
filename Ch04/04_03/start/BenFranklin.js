// events module
const events = require('events');

// event emitter is a constructor so we'll need to create a new instance
const emitter = new events.EventEmitter();

// everytime we use 'on' we can wire a custom event
emitter.on('customEvent', (msg, status) => {
  console.log(`${status}: ${msg}`);
});

// trigger custom event
emitter.emit('customEvent', 'Hello World', 200);
