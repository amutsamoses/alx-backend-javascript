const express = require('express');

// create instance of exprexx application
const app = express();

// define route handler for root patt
app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
