const https = require('https');
const constants = require('constants');

var options = {
  hostname: 'wrong.host.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
  rejectUnauthorized: false,
  checkServerIdentity: (servername, peer) => {
    console.log("test1: checkServerIdentity");
    if (servername !== "www.google.com") {
      return new Error ('Error');
    }
  }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant: rejectUnauthorized to false


req.on('error', err => {
  console.dir("test 1"+err);
});


var options = {
  hostname: 'wrong.host.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
  rejectUnauthorized: true ,
  checkServerIdentity: (servername, peer) => {
    console.log("test2: checkServerIdentity");
    if (servername !== "www.google.com") {
      return new Error ('Error');
    }
  }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant: rejectUnauthorized to true and some checks inside checkServerIdentity


req.on('error', err => {
  console.dir("test 2"+err);
});


var options = {
  hostname: 'wrong.host.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
  checkServerIdentity: (servername, peer) => {
    console.log("test3: checkServerIdentity");
    if (servername !== "www.google.com") {
      return new Error ('Error');
    }
  }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant: rejectUnauthorized to true and some checks inside checkServerIdentity


req.on('error', err => {
  console.dir("test 3"+err);
});



var options = {
  hostname: 'wrong.host.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant: rejectUnauthorized to true and default checkServerIdentity


req.on('error', err => {
  console.dir("test 4"+err);
});




var options = {
  hostname: 'wrong.host.badssl.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1,
  checkServerIdentity: function() {} // Noncompliant: there is no test cases
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant


req.on('error', err => {
  console.dir("test 5"+err);
});
