const https = require('https');
const constants = require('constants');

var options1 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 
};

var req1 = https.request(options1, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant


req1.on('error', err => {
  console.dir("test 1"+err);
});


var options2 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3
};

var req3 = https.request(options2, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant


var options3 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};

var req3 = https.request(options3, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant


var options4 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};

var req4 = https.request(options4, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Compliant



/*
 * DISABLED BY DEFAULT
 * */

var options5 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'SSLv3_method'
};

var req5 = https.request(options5, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant

req.on('error', err => {
  console.dir("test 1"+err);
});

var options6 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'SSLv3_server_method' 
};

var req6 = https.request(options6, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant


var options7 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'SSLv3_client_method'
};

var req7 = https.request(options7, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant

var options8 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_method'
};

var req8 = https.request(options8, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options9 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_server_method'
};

var req9 = https.request(options9, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options10 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_client_method'
};

var req10 = https.request(options10, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options11 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_1_method'
};

var req11 = https.request(options11, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options12 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_1_server_method'
};

var req12 = https.request(options12, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options13 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_1_client_method'
};

var req13 = https.request(options13, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


/*
 * NOT ALWAYS SUPPORTED
 * 
 * */


var options14 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'DTLSv1_method'
};

var req14 = https.request(options14, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options15 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'DTLSv1_server_method'
};

var req15 = https.request(options15, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options16 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'DTLSv1_client_method'
};


var req16 = https.request(options16, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant


var options17 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_2_method'
};

var req17 = https.request(options17, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Compliant


var options18 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_2_server_method'
};

var req18 = https.request(options18, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Compliant


var options19 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  secureProtocol: 'TLSv1_2_client_method'
};

var req19 = https.request(options19, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Compliant










// Maxversion & Minversion
// Minversion should be TLSv1.2 only
// Maxversion should be TLSv1.2 or TLSv1.3 only


var options20 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  minVersion: 'TLSv1.2', 
  maxVersion: 'TLSv1.3'
};

var req20 = https.request(options20, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Compliant




var options21 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  minVersion: 'TLSv1.2', 
  maxVersion: 'TLSv1.2'
};

var req21 = https.request(options21, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Compliant




var options22 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  minVersion: 'TLSv1.1',  // Noncompliant
  maxVersion: 'TLSv1.3'
};

var req22 = https.request(options22, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}); // Noncompliant




var options23 = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  minVersion: 'TLSv1.1',  // Noncompliant
  maxVersion: 'TLSv1.1' // Noncompliant
};

var req23 = https.request(options23, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});  // Noncompliant







