const fs = require('fs');

fs.renameSync('./assets/logs', './logs');

console.log('Directory removed.');
