const express = require('express');

// creates a new instance of an express application
const app = express();

// now we can add middleware
// middleware: customized plugins with express to add functionality to the application

// custom middleware function
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static('./public'));

app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;
