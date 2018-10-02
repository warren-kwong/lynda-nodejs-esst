// core module 'path'
const path = require('path');
// core module 'ultilies'
const util = require('util');
// core module v8
const v8 = require('v8');

console.log(path.basename(__filename)); // core.js

// path.join can join strings together in a path
// __dirname is the current directory
// __filename is the current file

// logs current directory name .../Ch04/04_01/start/www/files/uploads
let dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);

// the difference between console and util is that util also adds a timestamp
util.log(path.basename(__filename)); // 1 Oct 23:38:09 - core.js
util.log(dirUploads);
// gives current memory's statistics as a js literal
util.log(v8.getHeapStatistics());
