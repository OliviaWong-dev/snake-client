const IP = 'localhost';
const PORT = 50541;
const name = "OWW"
const message = "bye"
const keys = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  x: `Say: ${message}`,
  }

module.exports = {
  IP,
  PORT,
  name,
  keys
}