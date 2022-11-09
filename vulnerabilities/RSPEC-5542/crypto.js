const crypto = require('crypto');


/*
 * https://nodejs.org/api/crypto.html#crypto_cipher_setautopadding_autopadding
 * PKCS Padding by default
 * */

var key = crypto.randomBytes(16);
var keydoubled = crypto.randomBytes(32);
var iv = Buffer.from(crypto.randomBytes(16));
var iv8 = Buffer.from(crypto.randomBytes(8));
var iv4 = Buffer.from(crypto.randomBytes(4));
const nonce = crypto.randomBytes(12);

crypto.createCipheriv("AES-128-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-128-CBC-HMAC-SHA1", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-128-CBC-HMAC-SHA256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-128-CFB", key, iv);
crypto.createCipheriv("AES-128-CFB1", key, iv);
crypto.createCipheriv("AES-128-CFB8", key, iv);
crypto.createCipheriv("AES-128-CTR", key, iv);

crypto.createCipheriv("AES-128-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("AES-128-OCB", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-128-OFB", key, iv);
crypto.createCipheriv("AES-128-XTS", keydoubled, iv);
crypto.createCipheriv("AES128", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // alias of AES-128-CBC
crypto.createCipheriv("AES-128-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-128-CBC-HMAC-SHA1", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-128-CBC-HMAC-SHA256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("id-aes128-CCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-128-CFB", key, iv);
crypto.createCipheriv("AES-128-CFB1", key, iv);
crypto.createCipheriv("AES-128-CFB8", key, iv);
crypto.createCipheriv("AES-128-CTR", key, iv);
crypto.createCipheriv("AES-128-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("id-aes128-GCM", key, iv);
crypto.createCipheriv("AES-128-OCB", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-128-OFB", key, iv);
crypto.createCipheriv("AES-128-XTS", keydoubled, iv);
crypto.createCipheriv("aes128", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of AES-128-CBC

crypto.createCipheriv("aes128-wrap", key, iv8); // Alias of id-aes128-wrap

crypto.createCipheriv("id-aes128-CCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("id-aes128-GCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("id-aes128-wrap", key, iv8);
crypto.createCipheriv("id-aes128-wrap-pad", key, iv4);

var key = crypto.randomBytes(24);
var iv = Buffer.from(crypto.randomBytes(16));
crypto.createCipheriv("AES-192-CFB1", key, iv);
crypto.createCipheriv("AES-192-CFB8", key, iv);
crypto.createCipheriv("AES-192-CTR", key, iv);
crypto.createCipheriv("AES-192-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("AES-192-OCB", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-192-OFB", key, iv);
crypto.createCipheriv("AES192", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// alias of AES-192-CBC
crypto.createCipheriv("AES-192-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("id-aes192-CCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-192-CFB", key, iv);
crypto.createCipheriv("AES-192-CFB1", key, iv);
crypto.createCipheriv("AES-192-CFB8", key, iv);
crypto.createCipheriv("AES-192-CTR", key, iv);
crypto.createCipheriv("AES-192-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("id-aes192-GCM", key, iv);
crypto.createCipheriv("AES-192-OCB", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-192-OFB", key, iv);
crypto.createCipheriv("aes192", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)  // Alias of AES-192-CBC
crypto.createCipheriv("aes192-wrap", key, iv8); // Alias of id-aes192-wrap
crypto.createCipheriv("id-aes192-CCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("id-aes192-GCM", key, iv);
crypto.createCipheriv("id-aes192-wrap", key, iv8);
crypto.createCipheriv("id-aes192-wrap-pad", key, iv4);

var key = crypto.randomBytes(32);
var keydoubled = crypto.randomBytes(64);
var iv = Buffer.from(crypto.randomBytes(16));
crypto.createCipheriv("AES-256-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-256-CBC-HMAC-SHA1", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-256-CBC-HMAC-SHA256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-256-CFB", key, iv);
crypto.createCipheriv("AES-256-CFB1", key, iv);
crypto.createCipheriv("AES-256-CFB8", key, iv);
crypto.createCipheriv("AES-256-CTR", key, iv);
crypto.createCipheriv("AES-256-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("AES-256-OCB", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-256-OFB", key, iv);
crypto.createCipheriv("AES-256-XTS", keydoubled, iv);
crypto.createCipheriv("AES256", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// alias of AES-256-CBC
crypto.createCipheriv("AES-256-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-256-CBC-HMAC-SHA1", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("AES-256-CBC-HMAC-SHA256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("id-aes256-CCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-256-CFB", key, iv);
crypto.createCipheriv("AES-256-CFB1", key, iv);
crypto.createCipheriv("AES-256-CFB8", key, iv);
crypto.createCipheriv("AES-256-CTR", key, iv);
crypto.createCipheriv("AES-256-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("id-aes256-GCM", key, iv);
crypto.createCipheriv("aes-256-gcm", key, iv);
crypto.createCipheriv("AES-256-OCB", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("AES-256-OFB", key, iv);
crypto.createCipheriv("AES-256-XTS", keydoubled, iv);
crypto.createCipheriv("aes256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of AES-256-CBC
crypto.createCipheriv("aes256-wrap", key, iv8); // Alias of id-aes256-wrap
crypto.createCipheriv("id-aes256-CCM", key, nonce, {
  authTagLength: 16
});
crypto.createCipheriv("id-aes256-GCM", key, iv);
crypto.createCipheriv("id-aes256-wrap", key, iv8);
crypto.createCipheriv("id-aes256-wrap-pad", key, iv4);

var iv = Buffer.from(crypto.randomBytes(8));
crypto.createCipheriv("BF", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// alias of BF-CBC
crypto.createCipheriv("BF-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("BF-CFB", key, iv);
crypto.createCipheriv("BF-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("BF-OFB", key, iv);
crypto.createCipheriv("bf", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of BF-CBC
crypto.createCipheriv("BF-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("BF-CFB", key, iv);
crypto.createCipheriv("BF-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("BF-OFB", key, iv);
crypto.createCipheriv("blowfish", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of BF-CBC

var key = crypto.randomBytes(16);
var iv = Buffer.from(crypto.randomBytes(16));
crypto.createCipheriv("CAMELLIA-128-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAMELLIA-128-CFB", key, iv);
crypto.createCipheriv("CAMELLIA-128-CFB1", key, iv);
crypto.createCipheriv("CAMELLIA-128-CFB8", key, iv);
crypto.createCipheriv("CAMELLIA-128-CTR", key, iv);
crypto.createCipheriv("CAMELLIA-128-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAMELLIA-128-OFB", key, iv);
crypto.createCipheriv("CAMELLIA128", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of CAMELLIA-128-CBC
crypto.createCipheriv("CAMELLIA-128-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAMELLIA-128-CFB", key, iv);
crypto.createCipheriv("CAMELLIA-128-CFB1", key, iv);
crypto.createCipheriv("CAMELLIA-128-CFB8", key, iv);
crypto.createCipheriv("CAMELLIA-128-CTR", key, iv);
crypto.createCipheriv("CAMELLIA-128-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAMELLIA-128-OFB", key, iv);
crypto.createCipheriv("camellia128", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of  CAMELLIA-128-CBC

var key = crypto.randomBytes(24);
var iv = Buffer.from(crypto.randomBytes(16));
crypto.createCipheriv("CAMELLIA-192-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAMELLIA-192-CFB", key, iv);
crypto.createCipheriv("CAMELLIA-192-CFB1", key, iv);
crypto.createCipheriv("CAMELLIA-192-CFB8", key, iv);
crypto.createCipheriv("CAMELLIA-192-CTR", key, iv);
crypto.createCipheriv("CAMELLIA-192-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAMELLIA-192-OFB", key, iv);
crypto.createCipheriv("CAMELLIA192", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of CAMELLIA-192-CBC
crypto.createCipheriv("CAMELLIA-192-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAMELLIA-192-CFB", key, iv);
crypto.createCipheriv("CAMELLIA-192-CFB1", key, iv);
crypto.createCipheriv("CAMELLIA-192-CFB8", key, iv);
crypto.createCipheriv("CAMELLIA-192-CTR", key, iv);
crypto.createCipheriv("CAMELLIA-192-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAMELLIA-192-OFB", key, iv);
crypto.createCipheriv("camellia192", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of CAMELLIA-192-CBC

var key = crypto.randomBytes(32);
var iv = Buffer.from(crypto.randomBytes(16));
crypto.createCipheriv("CAMELLIA-256-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAMELLIA-256-CFB", key, iv);
crypto.createCipheriv("CAMELLIA-256-CFB1", key, iv);
crypto.createCipheriv("CAMELLIA-256-CFB8", key, iv);
crypto.createCipheriv("CAMELLIA-256-CTR", key, iv);
crypto.createCipheriv("CAMELLIA-256-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAMELLIA-256-OFB", key, iv);
crypto.createCipheriv("CAMELLIA256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of CAMELLIA-256-CBC
crypto.createCipheriv("CAMELLIA-256-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAMELLIA-256-CFB", key, iv);
crypto.createCipheriv("CAMELLIA-256-CFB1", key, iv);
crypto.createCipheriv("CAMELLIA-256-CFB8", key, iv);
crypto.createCipheriv("CAMELLIA-256-CTR", key, iv);
crypto.createCipheriv("CAMELLIA-256-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAMELLIA-256-OFB", key, iv);
crypto.createCipheriv("camellia256", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of  CAMELLIA-256-CBC

var iv = Buffer.from(crypto.randomBytes(8));
crypto.createCipheriv("CAST", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of CAST5-CBC
crypto.createCipheriv("CAST-cbc", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of CAST5-CBC
crypto.createCipheriv("CAST5-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAST5-CFB", key, iv);
crypto.createCipheriv("CAST5-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAST5-OFB", key, iv);
crypto.createCipheriv("cast", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of CAST5-CBC
crypto.createCipheriv("cast-cbc", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of CAST5-CBC
crypto.createCipheriv("CAST5-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("CAST5-CFB", key, iv);
crypto.createCipheriv("CAST5-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("CAST5-OFB", key, iv);
/*
var iv = Buffer.from(crypto.randomBytes(12));
crypto.createCipheriv("ChaCha20", key, iv);
crypto.createCipheriv("ChaCha20-Poly1305", key, iv);
crypto.createCipheriv("ChaCha20", key, iv);
crypto.createCipheriv("ChaCha20-Poly1305", key, iv);
*/

var key = crypto.randomBytes(8);
var iv = Buffer.from(crypto.randomBytes(8));
crypto.createCipheriv("DES", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of DES-CBC
crypto.createCipheriv("DES-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("DES-CFB", key, iv); 
crypto.createCipheriv("DES-CFB1", key, iv); 
crypto.createCipheriv("DES-CFB8", key, iv); 
crypto.createCipheriv("DES-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality

var key = crypto.randomBytes(16);
crypto.createCipheriv("DES-EDE", key, "");  // Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("DES-EDE-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("DES-EDE-CFB", key, iv); 
crypto.createCipheriv("DES-EDE-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality // Alias of DES-EDE
crypto.createCipheriv("DES-EDE-OFB", key, iv); 

var key = crypto.randomBytes(24);
crypto.createCipheriv("DES-EDE3", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("DES-EDE3-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("DES-EDE3-CFB", key, iv);  
crypto.createCipheriv("DES-EDE3-CFB1", key, iv); 
crypto.createCipheriv("DES-EDE3-CFB8", key, iv); 
crypto.createCipheriv("DES-EDE3-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality// Alias of DES-EDE3
crypto.createCipheriv("DES-EDE3-OFB", key, iv); 

var key = crypto.randomBytes(8);
crypto.createCipheriv("DES-OFB", key, iv); 
var key = crypto.randomBytes(24);
crypto.createCipheriv("DES3", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of DES-EDE3-CBC
crypto.createCipheriv("DESX", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of DESX-CBC
crypto.createCipheriv("DESX-CBC", key, iv); 

var key = crypto.randomBytes(8);
crypto.createCipheriv("des", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of DES-CBC
crypto.createCipheriv("DES-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("DES-CFB", key, iv); 
crypto.createCipheriv("DES-CFB1", key, iv);
crypto.createCipheriv("DES-CFB8", key, iv); 
crypto.createCipheriv("DES-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality

var key = crypto.randomBytes(16);
crypto.createCipheriv("DES-EDE", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("DES-EDE-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("DES-EDE-CFB", key, iv); 
crypto.createCipheriv("des-ede-ecb", key, "");  // Noncompliant: ECB doesn't provide serious message confidentiality // Alias of DES-EDE
crypto.createCipheriv("DES-EDE-OFB", key, iv); 

var key = crypto.randomBytes(24);
crypto.createCipheriv("DES-EDE3", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("DES-EDE3-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("DES-EDE3-CFB", key, iv);
crypto.createCipheriv("DES-EDE3-CFB1", key, iv);
crypto.createCipheriv("DES-EDE3-CFB8", key, iv);
crypto.createCipheriv("des-ede3-ecb", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality// Alias of DES-EDE3
crypto.createCipheriv("DES-EDE3-OFB", key, iv); 

var key = crypto.randomBytes(8);
crypto.createCipheriv("DES-OFB", key, iv);
var key = crypto.randomBytes(24);
crypto.createCipheriv("des3", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of DES-EDE3-CBC

//crypto.createCipheriv("des3-wrap", key, iv4); // Alias of id-smime-alg-CMS3DESwrap
crypto.createCipheriv("desx", key, iv); // Alias of DESX-CBC
crypto.createCipheriv("DESX-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
//crypto.createCipheriv("id-smime-alg-CMS3DESwrap", key, iv); 

crypto.createCipheriv("RC2", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of RC2-CBC
crypto.createCipheriv("RC2-40-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("RC2-64-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("RC2-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("RC2-CFB", key, iv);
crypto.createCipheriv("RC2-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("RC2-OFB", key, iv);
crypto.createCipheriv("rc2", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)  // Alias of RC2-CBC
crypto.createCipheriv("rc2-128", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of RC2-CBC
crypto.createCipheriv("rc2-40", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of  RC2-40-CBC
crypto.createCipheriv("RC2-40-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("rc2-64", key, iv); // Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)// Alias of RC2-64-CBC
crypto.createCipheriv("RC2-64-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("RC2-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("RC2-CFB", key, iv);
crypto.createCipheriv("RC2-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("RC2-OFB", key, iv);


crypto.createCipheriv("RC4", key, "");
crypto.createCipheriv("RC4-40", key, "");
crypto.createCipheriv("RC4-HMAC-MD5", key, "");
crypto.createCipheriv("RC4", key, "");
crypto.createCipheriv("RC4-40", key, "");
crypto.createCipheriv("RC4-HMAC-MD5", key, "");

var key = Buffer.from(crypto.randomBytes(16));
var iv = Buffer.from(crypto.randomBytes(16));
crypto.createCipheriv("SEED", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of SEED-CBC
crypto.createCipheriv("SEED-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("SEED-CFB", key, iv);
crypto.createCipheriv("SEED-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("SEED-OFB", key, iv);
crypto.createCipheriv("seed", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme) // Alias of SEED-CBC
crypto.createCipheriv("SEED-CBC", key, iv);// Noncompliant: CBC with PKCS5/7 is vulnerable to oracle padding attacks (PKCS is the default padding scheme)
crypto.createCipheriv("SEED-CFB", key, iv);
crypto.createCipheriv("SEED-ECB", key, "");// Noncompliant: ECB doesn't provide serious message confidentiality
crypto.createCipheriv("SEED-OFB", key, iv);

