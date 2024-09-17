/**
 * Simple HTTP server that listens for incoming requests and sends a plain text response.
 */

// Import the built-in 'http' module to create an HTTP server
const http = require('http');

// Define the host and port where the server will run
const host = '127.0.0.1'; // Localhost IP address
const port = 1245; // Port number where the server will listen

/**
 * Create the server and define its behavior.
 * It listens for incoming HTTP requests and sends back a response.
 * @param {http.IncomingMessage} req - The incoming request object.
 * @param {http.ServerResponse} resp - The outgoing response object.
 */
const app = http.createServer((req, resp) => {
  // Set the status code of the response to 200 (OK)
  // eslint-disable-next-line no-param-reassign
  resp.statusCode = 200;
  // Set the Content-Type header of the response to 'text/plain'
  resp.setHeader('Content-Type', 'text/plain');
  // Send the response body and end the response
  resp.end('Hello Holberton School!');
});

// Make the server start listening
app.listen(port, host, () => {
  // Log a message to the console
  console.log(`Server is live, running at http://${host}:${port}`);
});

// Export the app module
module.exports = app;
