const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
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
    conn.write("Name: OWW");
    // conn.write("Move: up")

    // SETINTERVAL
    // setInterval(() => {
    // }, 3000)

    // SETTIMEOUT
    // let delay = 1000;
    // for (let i = 0; i < move.length; i++) {
    //   setTimeout(() => {
    //     conn.write(move[i])
    //   }, delay);
    //   delay += 3000;
    // };
  });


  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

// const move = ["Move: up", "Move: down", "Move: left", "Move: right" ]

module.exports = connect;