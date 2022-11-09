const https = require('https')
const fs = require('fs');

const port = 3001

const options = {
  key: fs.readFileSync('https/key.pem'),
  cert: fs.readFileSync('https/cert.pem')
};

// https extend http module and work similarely.
// Create an instance of `https.Server`
let server = https.createServer();
server = new https.Server();

// Subscribe to 'request' event
// `req` object is an http.IncomingMessage that represents an incoming HTTP request
server = https.createServer((req, res) => {}) // Without `options` arg
server = https.createServer({}, (req, res) => {}) // With two args
server = new https.Server((req, res) => {}) // Without `options` arg
server = new https.Server({}, (req, res) => {}) // With two args
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
    // `req` object is an http.IncomingMessage that represents an incoming HTTP request
    try {
      eval(req.headers.accept) // Noncompliant (S5334)
    } catch(error) {}
  
    res.writeHead(204)
    res.end()
};
server.on('request', serverConnectionHandler);

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})