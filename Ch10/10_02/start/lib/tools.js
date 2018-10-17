const https = require('https');

module.exports = {
  printName(person) {
    return `${person.last}, ${person.first}`;
  },

  loadWiki(person, callback) {
    const url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;

    https.get(url, function(res) {
      let body = '';

      res.setEncoding('UTF-8');

      res.on('data', function(chunk) {
        body += chunk;
      });

      res.on('end', function() {
        callback(body);
      });
    });
  }
};
