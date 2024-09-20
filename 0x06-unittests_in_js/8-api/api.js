const express = require('express');

const HOST = '127.0.0.1';
const PORT = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, HOST, () => {
  console.log(`API available on localhost: ${HOST} port:${PORT}`);
});

module.exports = app;
