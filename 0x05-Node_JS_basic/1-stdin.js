/**
 * Executted on CLI
 * display a message
 * user input there name on a new line
 * diplay the users name
 * display an ending message when user ends the program.
 *
 * Requirement: test thru a child process.
 */

// extract stdin and stdout from the process
const { stdout, stdin } = process;

// writng the standard output either terminal/console
stdout.write('Welcome to Holberton School, what is your name?\n');

// set the encoding for stdin
stdin.setEncoding('utf-8');

// listen for readable event on stdin
stdin.on('readable', () => {
  // read the data from stdin
  const name = stdin.read();

  // write the name to stdout
  stdout.write(`Your name is: ${name}`);
  process.exit();
});

// handle the exit event of the process
process.on('exit', () => {
  // closing message
  stdout.write('This important software is now closing\n');
});
