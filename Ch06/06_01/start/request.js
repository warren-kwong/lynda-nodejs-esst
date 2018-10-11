// http and https module:
// https when working with a secure server (required security certificate)
// http - no security certificate necessary
const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'en.wikipedia.org',
  port: 443, //default port for https is 443 (http default port is 80)
  path: '/wiki/George_Washington',
  method: 'GET'
};

// request fn -- send in the options
// once the request has started, it takes a callback that the response object
// the response object implements the stream
var req = https.request(options, response => {
  var responseBody = '';

  console.log('Response from server started.');
  console.log(`Server Status: ${response.statusCode} `);
  console.log('Response Headers: %j', response.headers); // reminder %j for json

  // ensures the stream comes in as text
  response.setEncoding('UTF-8');

  // log first chunk just to see what it looks like
  response.once('data', chunk => {
    console.log(chunk);
  });

  // on every data event, log the chunk & concat to responseBody
  response.on('data', chunk => {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  // when the response has ended, create a html file with that data
  response.on('end', () => {
    fs.writeFile('george-washington.html', responseBody, err => {
      if (err) {
        throw err;
      }
      console.log('File downloaded');
    });
  });
});

// if an error occurs with the request... the error will be passed to the callback
req.on('error', err => {
  console.log(`problem with request: ${err.message}`);
});

req.end();
