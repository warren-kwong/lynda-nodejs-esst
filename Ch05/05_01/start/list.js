const fs = require('fs'); // file system module

const files = fs.readdir('./lib', (err, files) => {
  if (err) throw err;
  console.log(files);
}); // asynchronously read the ./lib directory

console.log('Reading files...');
