const http = require('http');

// every request to the server will invoke the callback
// 2 arguments: request and response object
const server = http.createServer((req, res) => {
  // complete the response headers
  // status code: 200 successful response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // end response and send data
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <h1>Serving HTML</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  
  `);
});

// need to let the server instance know which port to be listening on
server.listen(3000);
console.log('Server listening on port 3000');
