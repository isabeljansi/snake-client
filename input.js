// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  // KEY w
  if (key === 'w') {
    connection.write('Move: up');
  }
  // KEY a
  if (key === 'a') {
    connection.write('Move: left');
  }
  // KEY s
  if (key === 's') {
    connection.write('Move: down');
  }
  // KEY d
  if (key === 'd') {
    connection.write('Move: right');
  }
};


module.exports = {
  handleUserInput,
  setupInput
}