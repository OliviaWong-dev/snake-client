const obj = require('./constants');
let connection;


const handleUserInput = (key) => {
  if (key === '\u0003') {
    return process.exit();
  }
  if (!obj.keys[key]) {
    return;
  }
  connection.write(obj.keys[key]);
};



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = setupInput;
