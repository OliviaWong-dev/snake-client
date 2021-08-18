const net = require('net');
const obj = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });


  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
  });

  conn.on('connect', () => {
    conn.write(`Name: ${obj.name}`);
  });
  

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};


module.exports = connect;