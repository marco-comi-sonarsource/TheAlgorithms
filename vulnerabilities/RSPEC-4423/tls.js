const tls = require('tls');
const constants = require('constants');

var options1 = {
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 
};

// should raise whereever options could be passed as valid argument
/*
 * tls.createSecureContext
 * tls.connect (2nd or 3rd arguments)
 * */
tls.createSecureContext(options1); // Noncompliant


var socket1 = tls.connect(443, "www.google.com", options1, () => { 
  console.log('1) client connected',
              socket1.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket1);
  process.stdin.resume();
}); // Noncompliant

socket1.on('error', err => {
  console.dir("test 1"+err);
});

var options2 = {
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3
};

var socket2 = tls.connect(443, "www.google.com", options2, () => {
  console.log('2) client connected',
              socket2.authorized ? 'authorized' : 'unauthorized');
}); // Noncompliant

socket2.on('error', err => {
  console.dir("test 2"+err);
});

var options3 = {
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};

var socket3 = tls.connect(443, "www.google.com", options3, () => {
  console.log('3) client connected',
              socket3.authorized ? 'authorized' : 'unauthorized');
});  // Compliant

socket3.on('error', err => {
  console.dir("test 3"+err);
});

var options4 = {
  secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};

var socket4 = tls.connect(443, "www.google.com", options4, () => {
  console.log('4) client connected',
              socket4.authorized ? 'authorized' : 'unauthorized');
}); // Compliant

socket4.on('error', err => {
  console.dir("test 4"+err);
});

var options5 = {
  secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};

var socket5 = tls.connect(443, "www.google.com", options5, () => {
  console.log('5) client connected',
              socket5.authorized ? 'authorized' : 'unauthorized');
});  // Compliant: sslv2 and sslv3 are disabled by default on nodeJS

socket5.on('error', err => {
  console.dir("test 5"+err);
});

// only one compliant is needed between secureOptions and secureProtocol
var options6 = {
  // secureOptions by default, disable only sslv2 and sslv2 and not tlv1 and tlsv1.1 so it should raise an issue but secureProtocol is compliant:
  secureProtocol: 'TLSv1_2_method'
};

var socket6 = tls.connect(443, "www.google.com", options6, () => {
  console.log('6) client connected',
              socket6.authorized ? 'authorized' : 'unauthorized');
}); // Compliant

socket6.on('error', err => {
  console.dir("test 6"+err);
});

var options7 = {
    // secureProtocol will be choosen betwenn all protocol availables so it should raise an issue but secureOptions is compliant:
    secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
};

var socket7 = tls.connect(443, "www.google.com", options7, () => {
  console.log('7) client connected',
              socket7.authorized ? 'authorized' : 'unauthorized');
}); // Compliant

socket7.on('error', err => {
  console.dir("test 7"+err);
});

/*
 * DISABLED BY DEFAULT
 * */

var options8 = {
  secureProtocol: 'SSLv3_method'
};

var socket8 = tls.connect(8000, options8, () => {
  console.log('8) client connected',
              socket8.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket8);
  process.stdin.resume();
});  // Noncompliant

socket8.on('error', err => {
  console.dir("test 8"+err);
});

var options9 = {
  secureProtocol: 'SSLv3_server_method'
};

var socket9 = tls.connect(8000, options9, () => {
  console.log('9) client connected',
              socket9.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket9);
  process.stdin.resume();
});  // Noncompliant

socket9.on('error', err => {
  console.dir("test 9"+err);
});

var options10 = {
  secureProtocol: 'SSLv3_client_method'
};

var socket10 = tls.connect(8000, options10, () => {
  console.log('10) client connected',
              socket10.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket10);
  process.stdin.resume();
});  // Noncompliant

socket10.on('error', err => {
  console.dir("test 10"+err);
});

var options11 = {
  secureProtocol: 'TLSv1_method'
};

var socket11 = tls.connect(443, "www.google.com", options11, () => {
  console.log('11) client connected',
              socket11.authorized ? 'authorized' : 'unauthorized');
});  // Noncompliant

socket11.on('error', err => {
  console.dir("test 11"+err);
});

var options12 = {
  secureProtocol: 'TLSv1_server_method'
};

var socket12 = tls.connect(443, "www.google.com", options12, () => {
  console.log('12) client connected',
              socket12.authorized ? 'authorized' : 'unauthorized');
}); // Noncompliant

socket12.on('error', err => {
  console.dir("test 12"+err);
});

var options13 = {
  secureProtocol: 'TLSv1_client_method'
};

var socket13 = tls.connect(443, "www.google.com", options13, () => {
  console.log('13) client connected',
              socket13.authorized ? 'authorized' : 'unauthorized');
}); // Noncompliant

socket13.on('error', err => {
  console.dir("test 13"+err);
});

var options14 = {
  secureProtocol: 'TLSv1_1_method'
};

var socket14 = tls.connect(443, "www.google.com", options14, () => {
  console.log('14) client connected',
              socket14.authorized ? 'authorized' : 'unauthorized');
}); // Noncompliant

socket14.on('error', err => {
  console.dir("test 14"+err);
});

var options15 = {
  secureProtocol: 'TLSv1_1_server_method'
};

var socket15 = tls.connect(443, "www.google.com", options15, () => {
  console.log('15) client connected',
              socket15.authorized ? 'authorized' : 'unauthorized');
}); // Noncompliant

socket15.on('error', err => {
  console.dir("test 15"+err);
});

var options16 = {
  secureProtocol: 'TLSv1_1_client_method'
};

var socket16 = tls.connect(443, "www.google.com", options16, () => {
  console.log('16) client connected',
              socket16.authorized ? 'authorized' : 'unauthorized');
}); // Noncompliant

socket16.on('error', err => {
  console.dir("test 16"+err);
});

/*
 * NOT ALWAYS SUPPORTED
 * 
 * */
var options17 = {
  secureProtocol: 'DTLSv1_method'
};

var socket17 = tls.connect(8000, options17, () => {
  console.log('17) client connected',
              socket17.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket17);
  process.stdin.resume();
});  // Noncompliant

socket17.on('error', err => {
  console.dir("test 17"+err);
});

var options18 = {
  secureProtocol: 'DTLSv1_server_method'
};

var socket18 = tls.connect(8000, options18, () => {
  console.log('18) client connected',
              socket18.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket18);
  process.stdin.resume();
}); // Noncompliant

socket18.on('error', err => {
  console.dir("test 18"+err);
});

var options19 = {
  secureProtocol: 'DTLSv1_client_method'
};

var socket19 = tls.connect(8000, options19, () => {
  console.log('19) client connected',
              socket19.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket19);
  process.stdin.resume();
});  // Noncompliant

socket19.on('error', err => {
  console.dir("test 19"+err);
});

var options20 = {
  secureProtocol: 'TLSv1_2_method'
};

var socket20 = tls.connect(443, "www.google.com", options20, () => {
  console.log('20) client connected',
              socket20.authorized ? 'authorized' : 'unauthorized');
}); // Compliant

socket20.on('error', err => {
  console.dir("test 20"+err);
});

var options21 = {
  secureProtocol: 'TLSv1_2_server_method'
};

var socket21 = tls.connect(443, "www.google.com", options21, () => {
  console.log('21) client connected',
              socket21.authorized ? 'authorized' : 'unauthorized');
});  // Compliant

socket21.on('error', err => {
  console.dir("test 21"+err);
});

var options22 = {
  secureProtocol: 'TLSv1_2_client_method'
};

var socket = tls.connect(443, "www.google.com", options22, () => {
  console.log('22) client connected',
              socket22.authorized ? 'authorized' : 'unauthorized');
}); // Compliant

socket22.on('error', err => {
  console.dir("test 22"+err);
});



















// Maxversion & Minversion
// Minversion should be TLSv1.2 only
// Maxversion should be TLSv1.2 or TLSv1.3 only

var options23 = {
  minVersion: 'TLSv1.2', 
  maxVersion: 'TLSv1.3'
};

var socket = tls.connect(443, "www.google.com", options23, () => { 
  console.log('1) client connected',
              socket23.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket23);
  process.stdin.resume();
}); // Compliant

socket23.on('error', err => {
  console.dir("test 23"+err);
});


var options24 = {
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.2'
};

var socket = tls.connect(443, "www.google.com", options24, () => { 
  console.log('1) client connected',
              socket24.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket24);
  process.stdin.resume();
}); // Compliant

socket24.on('error', err => {
  console.dir("test 24"+err);
});


var options25 = {
  minVersion: 'TLSv1.1', // Noncompliant
  maxVersion: 'TLSv1.2'
};

var socket25 = tls.connect(443, "www.google.com", options25, () => { 
  console.log('1) client connected',
              socket25.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket25);
  process.stdin.resume();
}); // Noncompliant

socket25.on('error', err => {
  console.dir("test 24"+err);
});


var options26 = {
  minVersion: 'TLSv1.1', // Noncompliant
  maxVersion: 'TLSv1.1' // Noncompliant
};

var socket = tls.connect(443, "www.google.com", options26, () => { 
  console.log('1) client connected',
              socket26.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket26);
  process.stdin.resume();
}); // Noncompliant

socket26.on('error', err => {
  console.dir("test 24"+err);
});
