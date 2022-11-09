const tls = require('tls');

var options = {
    checkServerIdentity: (servername, peer) => {
        console.log("checkServerIdentity");
        if (servername !== "www.google.com") {
            return new Error ('Error');  // Compliant: there is at least one check on the servername argument that throw Error and rejectUnauthorized: true
        }
    },
    rejectUnauthorized: true
};

var socket = tls.connect(443, "www.google.fr", options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
}); // Compliant

socket.on('error', err => {
  console.dir("test 1"+err);
});
 

var options = {
    checkServerIdentity: (servername, peer) => {
        console.log("checkServerIdentity");
        if (servername !== "www.google.com") {
            return new Error ('Error');  // Compliant: there is at least one check on the servername argument that throw Error and rejectUnauthorized: true
        }
    }
};

var socket = tls.connect(443, "www.google.fr", options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
}); // Compliant

socket.on('error', err => {
  console.dir("test 2"+err);
});
 
 

var options = {
    checkServerIdentity: (servername, peer) => {
        console.log("checkServerIdentity");
        if (servername !== "www.google.com") {
            return new Error ('Error');
        }
    },
    rejectUnauthorized: false // Noncompliant
};

var socket = tls.connect(443, "www.google.fr", options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});  // Noncompliant: checkServerIdentity will be called but the connection will not be rejected in case of false identity

socket.on('error', err => {
  console.dir("test 3"+err);
});


 
 

var options = {
    checkServerIdentity: function() {}  // Noncompliant: there is no test cases
};

var socket = tls.connect(443, "www.google.fr", options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});  // Noncompliant

socket.on('error', err => {
  console.dir("test 4"+err);
});
