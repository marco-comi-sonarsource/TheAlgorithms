const net = require('net')

// Open a local  TCP server with `nc -l 4444`
const options = {
  host: 'localhost',
  port: 4444
}

// `socket` is an instance of `net.Socket`
const socket = net.createConnection(options, () => {})

// socket connection is initiated by the client side.
// Data received will not be considered tainted.
socket.on('data', (data) => {
  eval(data.toString()) // Compliant (S5334)
});
