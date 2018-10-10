const fs = require('fs');

// fs.readFile('./chat.log', 'UTF-8', (err, log) => {
//   console.log(`File Read ${log.length}`);
// });

// console.log('Reading File');

// readFile waits until the entire file is read before invoking the callback and passing the file contents which can cause latency or impact memory over large datasets

// rather than wait for the file to be read, we can use stream to get data chunks
var stream = fs.createReadStream('./chat.log', 'UTF-8');

var data = '';

stream.once('data', () => {
  console.log('\n\n\n');
  console.log('Started reading file.');
  console.log('\n\n\n');
});

stream.on('data', chunk => {
  process.stdout.write(`  chunk: ${chunk.length} |`);
  data += chunk;
});

stream.on('end', () => {
  console.log('\n\n\n');
  console.log(`Finished reading file: ${data.length}`);
  console.log('\n\n\n');
});
