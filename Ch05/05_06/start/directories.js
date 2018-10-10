const fs = require('fs');

// fs.rename is used to move directories
// *****************************************
// fs.renameSync('./assets/logs', './logs');
// console.log('Directory removed.');

// fs.rmdir is used to remove directory -- but it MUST be empty
// *****************************************
// fs.rmdir('./assets', err => {
//   if (err) {
//     throw err; // throw err crashes program
//   }
//   console.log('Assets Directory Removed');
// });

// fs.rmdir only removes empty directories.
// if you have to remove a directory, you must remove all files within
// *****************************************
fs.readdirSync('./logs').forEach(fileName => {
  fs.unlinkSync('./logs/' + fileName);
});

fs.rmdir('./logs', err => {
  if (err) {
    throw err;
  }
  console.log('Logs Directory Removed');
});
