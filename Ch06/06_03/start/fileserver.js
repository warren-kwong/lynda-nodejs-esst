const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    if (req.url === '/') {
      fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      });
    } else if (req.url.match(/.css$/)) {
      var cssPath = path.join(__dirname, 'public', req.url);
      var fileStream = fs.createReadStream(cssPath, 'UTF-8');

      res.writeHead(200, { 'Content-Type': 'text/css' });

      fileStream.pipe(res);
    } else if (req.url.match(/.jpg$/)) {
      var imgPath = path.join(__dirname, 'public', req.url);
      var imgStream = fs.createReadStream(imgPath); // Binary stream

      res.writeHead(200, { 'Content-Type': 'image/jpeg' });

      imgStream.pipe(res);
    } else {
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.end('404 File Not Found');
    }
  })
  .listen(3000); // chained requests

console.log('File server running on port 3000');
