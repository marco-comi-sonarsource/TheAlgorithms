const request = require('request');

var socket = request.get({
    url: 'https://self-signed.badssl.com',
    secureProtocol: 'TLSv1_2_method',
    rejectUnauthorized: false  // Noncompliant
}); // Noncompliant

socket.on('error', err => {
  console.dir("test 1"+err);
});

var socket = request.get({
    url: 'https://self-signed.badssl.com',
    secureProtocol: 'TLSv1_2_method',
    rejectUnauthorized: true
}); // Compliant

socket.on('error', err => {
  console.dir("test 2"+err);
});

var socket = request.get({
    url: 'https://self-signed.badssl.com',
    secureProtocol: 'TLSv1_2_method'
    //rejectUnauthorized: true // by default is set to true
}); // Compliant

socket.on('error', err => {
  console.dir("test 3"+err);
});
