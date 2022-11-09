const net = require('net')

const port = 3001

// Create a `net.Server`
let server = net.createServer(); 
server = new net.Server();

// Subscribe to 'connection' event
// `socket` is an instance of `net.Socket`
server = net.createServer((socket) => {}); // Without `options` arg
server = net.createServer({}, (socket) => {}); // With two args
server = new net.Server((socket) => {}); // Without `options` arg
server = new net.Server({}, (socket) => {}); // With two args
server.on('connection', (socket) => {});
server.addListener('connection', (socket) => {});

// Receiving tainted data from the socket
const serverConnectionHandler = (socket) => {
  // Subscribe to the 'data' event
  // echo 'console.log("HELLO")' | nc localhost 3001
  socket.on('data', (data) => {

    eval(data.toString()) // Noncompliant (S5334)
  });

  socket.on('readable', function () {

    eval(this.read()) // Noncompliant (S5334)
    eval(socket.read()) // Noncompliant (S5334)
  });
}
server = net.createServer(serverConnectionHandler);

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
