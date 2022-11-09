const tls = require('tls')

const options = {
  host: 'sonarcloud.io',
  port: 443
}

// `socket` is an instance of `tls.TLSSocket`
const socket = tls.connect(options, () => {})
socket.write("GET / HTTP/1.1\nHost: sonarcloud.io\n\n")
// socket connection is initiated by the client side.
// Data received will not be considered tainted.
socket.on('data', (data) => {
  eval(data.toString()) // Compliant (S5334)
});
