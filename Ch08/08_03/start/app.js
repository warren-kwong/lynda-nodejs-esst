const express = require('express');
// cors: cross origin resource sharing
// cors is a function that returns middleware
const cors = require('cors');
const app = express();

const skierTerms = [
  {
    term: 'Rip',
    defined: 'To move at a high rate of speed'
  },
  {
    term: 'Huck',
    defined:
      'To throw your body off of something, usually a natural feature like a cliff'
  },
  {
    term: 'Chowder',
    defined: 'Powder after it has been sufficiently skied'
  }
];

app.use(function(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static('./public'));
app.use(cors());

// get route
app.get('/dictionary-api', (req, res) => {
  res.json(skierTerms); // built in because of express
});

app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;
