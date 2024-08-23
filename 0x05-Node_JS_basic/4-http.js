const http = require('http');

/**
 * Create an HTTP server that responds with "Hello Holberton School!"
 * for any endpoint.
 */

const app = http.createServer((req, res) => {
  // Set the response status code t0 200(ok)
  res.statusCode = 200;

  // set content type to plain txt
  res.setHeader('Content-Type', 'text/plain');

  // body response
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
