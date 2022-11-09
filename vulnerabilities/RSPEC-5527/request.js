const request = require('request');

var socket = request.get({
    url: 'https://wrong.host.badssl.com',
    secureProtocol: 'TLSv1_2_method',
    rejectUnauthorized: false,  // Noncompliant
    checkServerIdentity: (servername, peer) => {
      console.log("checkServerIdentity");
      if (servername !== "www.google.com") {
        return new Error ('Error');
      }
    }
});  // Noncompliant: rejectUnauthorized to true

socket.on('error', err => {
  console.dir("test 1"+err);
});

var socket = request.get({
    url: 'https://wrong.host.badssl.com',
    secureProtocol: 'TLSv1_2_method',
    rejectUnauthorized: true,
    checkServerIdentity: (servername, peer) => {
      console.log("checkServerIdentity");
      if (servername !== "www.google.com") {
        return new Error ('Error');
      }
    }
}); // Compliant

socket.on('error', err => {
  console.dir("test 2"+err);
});

var socket = request.get({
    url: 'https://wrong.host.badssl.com',
    secureProtocol: 'TLSv1_2_method',
    checkServerIdentity: (servername, peer) => {
      console.log("checkServerIdentity");
      if (servername !== "www.google.com") {
        return new Error ('Error');
      }
    }
}); // Compliant

socket.on('error', err => {
  console.dir("test 3"+err);
});

var socket = request.get({
    url: 'https://wrong.host.badssl.com',
    secureProtocol: 'TLSv1_2_method'
}); // Compliant

socket.on('error', err => {
  console.dir("test 4"+err);
});

var socket = request.get({
    url: 'https://wrong.host.badssl.com',
    secureProtocol: 'TLSv1_2_method',
    checkServerIdentity: function() {}  // Noncompliant: there is no test cases
});

socket.on('error', err => {
  console.dir("test 5"+err);
});
