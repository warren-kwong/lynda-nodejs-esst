const fs = require('fs');

// fs.unlink
// fs.unlinkSync

// try catch block to prevent the synchronous function from throwing an error
try {
  fs.unlinkSync('./lib/config.json');
} catch (err) {
  console.log(err);
}

fs.unlink('notes.md', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Notes.md removed.');
  }
});
