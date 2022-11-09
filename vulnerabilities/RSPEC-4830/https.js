const https = require('https');
const constants = require('constants');

var options = {
  hostname: 'self-signed.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
  rejectUnauthorized: false  // Noncompliant
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant


req.on('error', err => {
  console.dir("test 1"+err);
});


var options = {
  hostname: 'self-signed.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
  rejectUnauthorized: true 
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant


req.on('error', err => {
  console.dir("test 2"+err);
});


var options = {
  hostname: 'self-signed.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant


req.on('error', err => {
  console.dir("test 3"+err);
});

