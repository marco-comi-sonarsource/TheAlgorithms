const request = require('request');
const constants = require('constants');

var options1 = {
    url: 'https://www.google.com/',
    passphrase: 'password',
    secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1
};

var socket1 = request.get(options1);  // Noncompliant

socket1.on('error', err => {
  console.dir("test 1"+err);
});


var options2 = {
    url: 'https://www.google.com/',
    passphrase: 'password',
    secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3
};
var socket2 = request.get(options2);  // Noncompliant

socket2.on('error', err => {
  console.dir("test 2"+err);
});

var options3 = {
    url: 'https://www.google.com/',
    passphrase: 'password',
    secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};
var socket3 = request.get(options3);  // Compliant

socket3.on('error', err => {
  console.dir("test 3"+err);
});


var options4 = {
    url: 'https://www.google.com/',
    passphrase: 'password',
    secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};
var socket4 = request.get(options4);  // Compliant: sslv2 and sslv3 are disabled by default on nodeJS

socket4.on('error', err => {
  console.dir("test 4"+err);
});

// only one compliant is needed between secureOptions and secureProtocol
var socket5 = request.get({
    url: 'https://www.google.com/',
    // secureOptions by default, disable only sslv2 and sslv2 and not tlv1 and tlsv1.1 so it should raise an issue but secureProtocol is compliant:
    secureProtocol: 'TLSv1_2_method' // Compliant
});

socket5.on('error', err => {
  console.dir("test 5"+err);
});

var socket6 = request.get({
    url: 'https://www.google.com/',
    // secureProtocol will be choosen betwenn all protocol availables so it should raise an issue but secureOptions is compliant:
    secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1 // Compliant
});

socket6.on('error', err => {
  console.dir("test 6"+err);
});

var socket7 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'SSLv3_method' // Noncompliant
});

socket7.on('error', err => {
  console.dir("test 7"+err);
});

var socket8 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'SSLv3_server_method' // Noncompliant
});

socket8.on('error', err => {
  console.dir("test 8"+err);
});


var socket9 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'SSLv3_client_method' // Noncompliant
});

socket9.on('error', err => {
  console.dir("test 9"+err);
});


var socket10 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_method' // Noncompliant
});

socket10.on('error', err => {
  console.dir("test 10"+err);
});


var socket11 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_server_method' // Noncompliant
});

socket11.on('error', err => {
  console.dir("test 11"+err);
});

var socket12 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_client_method' // Noncompliant
});

socket12.on('error', err => {
  console.dir("test 12"+err);
});


var socket13 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_1_method' // Noncompliant
});

socket13.on('error', err => {
  console.dir("test 13"+err);
});

var socket14 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_1_server_method' // Noncompliant
});

socket14.on('error', err => {
  console.dir("test 14"+err);
});

var socket15 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_1_client_method' // Noncompliant
});

socket15.on('error', err => {
  console.dir("test 15"+err);
});

var socket16 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'DTLSv1_method' // Noncompliant
});

socket16.on('error', err => {
  console.dir("test 16"+err);
});

var socket17 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'DTLSv1_server_method' // Noncompliant
});

socket17.on('error', err => {
  console.dir("test 17"+err);
});

var socket18 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'DTLSv1_client_method' // Noncompliant
});

socket18.on('error', err => {
  console.dir("test 18"+err);
});


var socket19 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_2_method' // Compliant
});

socket19.on('error', err => {
  console.dir("test 19"+err);
});

var socket20 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_2_server_method' // Compliant
});

socket20.on('error', err => {
  console.dir("test 20"+err);
});

var socket21 = request.get({
    url: 'https://www.google.com/',
    secureProtocol: 'TLSv1_2_client_method' // Compliant
});

socket21.on('error', err => {
  console.dir("test 21"+err);
});






// Maxversion & Minversion
// Minversion should be TLSv1.2 only
// Maxversion should be TLSv1.2 or TLSv1.3 only


var socket22 = request.get({
    url: 'https://www.google.com/',
    minVersion: 'TLSv1.2', 
    maxVersion: 'TLSv1.3'
}); // Compliant

socket22.on('error', err => {
  console.dir("test 22"+err);
});



var socket23 = request.get({
    url: 'https://www.google.com/',
    minVersion: 'TLSv1.2', 
    maxVersion: 'TLSv1.2'
}); // Compliant

socket23.on('error', err => {
  console.dir("test 23"+err);
});



var socket24 = request.get({
    url: 'https://www.google.com/',
    minVersion: 'TLSv1.1',  // Noncompliant
    maxVersion: 'TLSv1.3' // Noncompliant
}); // Noncompliant

socket24.on('error', err => {
  console.dir("test 24"+err);
});



var socket25 = request.get({
    url: 'https://www.google.com/',
    minVersion: 'TLSv1.1',  // Noncompliant
    maxVersion: 'TLSv1.1' // Noncompliant
}); // Noncompliant

socket25.on('error', err => {
  console.dir("test 25"+err);
});



