const http = require('http')

const port = 3001

// Create an instance of `http.Server`
let server = http.createServer();
server = new http.Server();

// Subscribe to 'request' event
// `req` object is an http.IncomingMessage that represents an incoming HTTP request
server = http.createServer((req, res) => {}) // Without `options` arg
server = http.createServer({}, (req, res) => {}) // With two args
server = new http.Server((req, res) => {}) // Without `options` arg
server = new http.Server({}, (req, res) => {}) // With two args
server.on('request', (req, res) => {});
server.addListener('request', (req, res) => {});

// Subscribe to 'connect' event
// `req` object is an http.IncomingMessage
// `socket` is an istance of `net.Socket`
server.on('connect', (req, socket, head) => {});

// Subscribe to 'connection' event
// `socket` is an istance of `net.Socket`
server.on('connection', (socket) => {});

// Receiving tainted data from `http.IncomingMessage`
const serverConnectionHandler = (req, res) => {
  
  // curl http://localhost:3001?a=a
  try {
    eval(req.headers) // Noncompliant (S5334)
    eval(req.headers['accept']) // Noncompliant
    eval(req.headers.accept) // Noncompliant
 
    eval(req.rawHeaders) // Noncompliant
    eval(req.rawHeaders[0]) // Noncompliant

    let url = req.url // /?a=a
    eval(url) // Noncompliant
  } catch(error) {}
  
  // Event callback are bind to the `req`
  // curl --request POST --data 'console.log("HELLO")'  http://localhost:3001
  req.on('data', (data) => {

    // Read the request body
    eval(data.toString) // Noncompliant
  });
  req.on('readable', function() {

    // Read the request body
    eval(this.read()); // Noncompliant
    eval(req.read()); // Noncompliant
    eval(this.read(req.readableLength)); // Noncompliant
    eval(req.read(req.readableLength)); // Noncompliant
  });

  // `socket` is an istance of `net.Socket`
  socket = req.socket;
  socket.on('data', (data) => {

    // Read the request body
    eval(data.toString) // Noncompliant
  });
};
server.on('request', serverConnectionHandler);

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
