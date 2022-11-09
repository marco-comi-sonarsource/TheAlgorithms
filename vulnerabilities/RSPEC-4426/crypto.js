const crypto = require('crypto');

function callback(err, pub, priv) {
  
}

var { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,  // Compliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}); // Compliant

var { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 1024,  // Noncompliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}); // Noncompliant


crypto.generateKeyPair('rsa', {
  modulusLength: 2048,  // Compliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Compliant

crypto.generateKeyPair('rsa', {
  modulusLength: 1024,  // Noncompliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Noncompliant

crypto.generateKeyPair('dsa', {
  modulusLength: 2048,  // Compliant
  divisorLength: 224, // Compliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Compliant

crypto.generateKeyPair('dsa', {
  modulusLength: 1024,  // Noncompliant
  divisorLength: 224, // Compliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Noncompliant

crypto.generateKeyPair('dsa', {
  modulusLength: 2048,  // Compliant
  divisorLength: 112, // Noncompliant
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Noncompliant

crypto.generateKeyPair('ec', {
  namedCurve: 'secp112r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Noncompliant



crypto.generateKeyPair('ec', {
  namedCurve: 'secp112r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // Noncompliant

crypto.generateKeyPair('ec', {
  namedCurve: 'secp128r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp128r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp160k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp160r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp160r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp192k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
/*
crypto.generateKeyPair('ec', {
  namedCurve: 'secp192r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
*/
crypto.generateKeyPair('ec', {
  namedCurve: 'secp224k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp224r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp256k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
/*
crypto.generateKeyPair('ec', {
  namedCurve: 'secp256r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
*/
crypto.generateKeyPair('ec', {
  namedCurve: 'secp384r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'secp521r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'prime192v2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'prime192v3', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'prime239v1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'prime239v2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'prime239v3', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect113r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect113r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect131r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect131r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect163k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect163r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect163r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect193r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect193r2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect233k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect233r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect239k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect283k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect283r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect409k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect409r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect571k1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'sect571r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb191v1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb191v2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb191v3', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);  // Noncompliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb239v1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb239v2', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb239v3', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb359v1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant
crypto.generateKeyPair('ec', {
  namedCurve: 'c2tnb431r1', 
  publicKeyEncoding:  { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback); // compliant

