const tls = require('tls')

const port = 3001

// Create a `tls.Server`
// `tls.Server` extends `net.Server`
let server = tls.createServer(); 
server = new tls.Server();

// Subscribe to events receiving an instance of `tls.TLSSocket`
server = tls.createServer((socket) => {}); // Without `options` arg
server = tls.createServer({}, (socket) => {}); // With two args
server = new tls.Server((socket) => {}); // Without `options` arg
server = new tls.Server({}, (socket) => {}); // With two args
server.on('secureConnection', (socket) => {});
server.addListener('secureConnection', (socket) => {});

// other events
server.on('connection', (socket) => {});
server.on('keylog', (_, socket) => {});
server.on('tlsClientError', (_, socket) => {});

// Receiving tainted data from `tls.TLSSocket`
const serverConnectionHandler = (socket) => {
  // Subscribe to the 'data' event
  socket.on('data', (data) => {

    eval(data.toString()) // Noncompliant (S5334)
  });

  socket.on('readable', function() {

    eval(this.read()) // Noncompliant (S5334)
    eval(socket.read()) // Noncompliant (S5334)
  });


}
server = tls.createServer(serverConnectionHandler);

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
