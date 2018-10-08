const fs = require('fs');
const path = require('path');

// Synchronously
// const contents = fs.readFileSync('./lib/sayings.md', 'UTF-8');
// console.log(contents);

// Asynchronously
// fs.readFile('./lib/sayings.md', 'UTF-8', (err, contents) => {
//   if (err) console.log(err);
//   console.log(contents);
// });

fs.readdir('./lib', (err, files) => {
  // files is array
  files.forEach(fileName => {
    let file = path.join(__dirname, 'lib', fileName); // convert fileName to full path for file
    let stats = fs.statSync(file); // synchronously get statistics for the file
    if (stats.isFile() && fileName !== '.DS_Store') {
      fs.readFile(file, 'UTF-8', (err, contents) => {
        console.log(contents);
      });
    }
  });
});
