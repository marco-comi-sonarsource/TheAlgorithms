const tls = require('tls');

var options = {
    rejectUnauthorized: false  // Noncompliant
};

var socket = tls.connect(443, "self-signed.badssl.com", options, () => {
  console.log('1 client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
}); // Noncompliant

socket.on('error', err => {
  console.dir("test 1"+err);
});

var options = {
    rejectUnauthorized: true
};

var socket = tls.connect(443, "self-signed.badssl.com", options, () => {
  console.log('2 client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
}); // Compliant


socket.on('error', err => {
  console.dir("test 2"+err);
});
 
var options = {
    //rejectUnauthorized: true // (default is set to true)
};

var socket = tls.connect(443, "self-signed.badssl.com", options, () => {
  console.log('3 client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});  // Compliant

socket.on('error', err => {
  console.dir("test 3"+err);
});

 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1"; // Compliant

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Noncompliant
