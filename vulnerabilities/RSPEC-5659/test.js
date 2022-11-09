const base64url = require('base64url');
const fs = require('fs');
const jwt = require('jsonwebtoken')
/*
const publicKey = fs.readFileSync('encryptionkeys/jwt.pub', 'utf8')
module.exports.publicKey = publicKey
const privateKey = '-----BEGIN RSA PRIVATE KEY-----\r\nMIICXAIBAAKBgQDNwqLEe9wgTXCbC7+RPdDbBbeqjdbs4kOPOIGzqLpXvJXlxxW8iMz0EaM4BKUqYsIa+ndv3NAn2RxCd5ubVdJJcX43zO6Ko0TFEZx/65gY3BE0O6syCEmUP4qbSd6exou/F+WTISzbQ5FBVPVmhnYhG/kpwt/cIxK5iUn5hm+4tQIDAQABAoGBAI+8xiPoOrA+KMnG/T4jJsG6TsHQcDHvJi7o1IKC/hnIXha0atTX5AUkRRce95qSfvKFweXdJXSQ0JMGJyfuXgU6dI0TcseFRfewXAa/ssxAC+iUVR6KUMh1PE2wXLitfeI6JLvVtrBYswm2I7CtY0q8n5AGimHWVXJPLfGV7m0BAkEA+fqFt2LXbLtyg6wZyxMA/cnmt5Nt3U2dAu77MzFJvibANUNHE4HPLZxjGNXN+a6m0K6TD4kDdh5HfUYLWWRBYQJBANK3carmulBwqzcDBjsJ0YrIONBpCAsXxk8idXb8jL9aNIg15Wumm2enqqObahDHB5jnGOLmbasizvSVqypfM9UCQCQl8xIqy+YgURXzXCN+kwUgHinrutZms87Jyi+D8Br8NY0+Nlf+zHvXAomD2W5CsEK7C+8SLBr3k/TsnRWHJuECQHFE9RA2OP8WoaLPuGCyFXaxzICThSRZYluVnWkZtxsBhW2W8z1b8PvWUE7kMy7TnkzeJS2LSnaNHoyxi7IaPQUCQCwWU4U+v4lD7uYBw00Ga/xt+7+UqFPlPVdz1yyr4q24Zxaw0LgmuEvgU5dycq8N7JxjTubX0MIRR+G9fmDBBl8=\r\n-----END RSA PRIVATE KEY-----'


let data = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NzQ5MzMwMzQsImV4cCI6MTU3NDkzNjYzNCwicm9sZXMiOlsiUk9MRV9UT1NfQUNDRVBURUQiLCJST0xFX1VTRVIiXSwiZW1haWwiOiJlcmljLnRoZXJvbmQuZnJAZ21haWwuY29tIiwidHRsIjozMDB9.lbOv4OupaPWHOP1mtgo6WV_Zf3Ae5GkgYmlr2DhvzDrDdSALwnrq64pLZJMap4w4G_1VF-BlaXWGBabJv0i4j1ToDNlR5HS869k7081R7m80BfMaDoQrgers2AX4snFo2ba_YrnqOY1q_-yUD8V-a_Cb61QLyFPj5x1cXUj6cH9sb4J5zeCb6rV_8D4HUzt8fRXNymYYILIYcGFMDb5fLuwN0xlqMvKW57uND6_QbDC3FOedi_9MNkixnWRPO0JISR_26WpmB0gR0YVI_0v8S5xpi4lOYsaOtxI1SAzr55HQU7xZYWnbwrrlYKyBN6_H_UYV8_HC7sge948psa_0D7Z_LpPVwBfpTw1NC-vW2b3ttrgZDlMLjotYj2cxn_urHfr0NOAcDYxjaDDNkqEhVj-dmAreJsNpVhUSdNC2bA64dF4WIQg9I5YOVtzRvtOdk3zOK14HNsmrRKyO6LW1lUXs7J-Y7Gdxv-Sn0hG7GpaGwxUU9gIGCm8T5uEYmBIqc5C3tgi58BhGo0gQCCgE0_NcdQWNuEPxKG6lzM37bUToZi3RIwhsa5qmCksbI__1Ecawq-QtnRUAyUK0fecrrrjxt2qfomvBoeeKXUSEfToBP-aMt0y8X4BbpTEcXjC_agdmZHVsZEaIH07rejNn5_7TnzwaGzJ_iKcOFEJ7aYc';
let text = base64url.decode(data);

console.log("'"+text+"'");

var header = '{"typ":"JWT","alg":"none"}';

var payload = '{"iat":1574933034,"exp":1574936634,"roles":["ROLE_TOS_ACCEPTED","ROLE_USER"],"email":"salut@salut.com","ttl":300}';

var token1 = base64url(header)+"."+base64url(payload)+".";

console.log("Manually try token: '"+token1+"'");

var token2 = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

console.log("Automatically try token: '"+token2+"'");


try {
  if (jwt.verify(token1, publicKey, { expiresIn: 36000000 * 5, algorithm: 'RS256' })) { 
    user = "blabla"
    console.log("1) verify - I AM HERE 1");
  }
} catch (err) {
  console.log("1) verify - I AM HERE 2");
  user = undefined
}

try {
  if (jwt.verify(token2, publicKey, { expiresIn: 36000000 * 5, algorithm: 'none' })) { 
    user = "blabla"
    console.log("2) verify - I AM HERE 1");
  }
  
} catch (err) {
  console.log("2) verify - I AM HERE 2");
  console.dir(err);
  user = undefined
}

var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'none' }); // none
console.log("'"+token+"'");
*/

// SIGN

var header = '{"typ":"JWT","alg":"none"}';

var payload = '{"iat":1574933034,"exp":1574936634,"roles":["ROLE_TOS_ACCEPTED","ROLE_USER"],"email":"salut@salut.com","ttl":300}';

const key = '-----BEGIN RSA PRIVATE KEY-----\r\nMIICXAIBAAKBgQDNwqLEe9wgTXCbC7+RPdDbBbeqjdbs4kOPOIGzqLpXvJXlxxW8iMz0EaM4BKUqYsIa+ndv3NAn2RxCd5ubVdJJcX43zO6Ko0TFEZx/65gY3BE0O6syCEmUP4qbSd6exou/F+WTISzbQ5FBVPVmhnYhG/kpwt/cIxK5iUn5hm+4tQIDAQABAoGBAI+8xiPoOrA+KMnG/T4jJsG6TsHQcDHvJi7o1IKC/hnIXha0atTX5AUkRRce95qSfvKFweXdJXSQ0JMGJyfuXgU6dI0TcseFRfewXAa/ssxAC+iUVR6KUMh1PE2wXLitfeI6JLvVtrBYswm2I7CtY0q8n5AGimHWVXJPLfGV7m0BAkEA+fqFt2LXbLtyg6wZyxMA/cnmt5Nt3U2dAu77MzFJvibANUNHE4HPLZxjGNXN+a6m0K6TD4kDdh5HfUYLWWRBYQJBANK3carmulBwqzcDBjsJ0YrIONBpCAsXxk8idXb8jL9aNIg15Wumm2enqqObahDHB5jnGOLmbasizvSVqypfM9UCQCQl8xIqy+YgURXzXCN+kwUgHinrutZms87Jyi+D8Br8NY0+Nlf+zHvXAomD2W5CsEK7C+8SLBr3k/TsnRWHJuECQHFE9RA2OP8WoaLPuGCyFXaxzICThSRZYluVnWkZtxsBhW2W8z1b8PvWUE7kMy7TnkzeJS2LSnaNHoyxi7IaPQUCQCwWU4U+v4lD7uYBw00Ga/xt+7+UqFPlPVdz1yyr4q24Zxaw0LgmuEvgU5dycq8N7JxjTubX0MIRR+G9fmDBBl8=\r\n-----END RSA PRIVATE KEY-----'

var token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' }); // Noncompliant
console.log("token1 ="+token);

var token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'HS256' }); // Compliant: RS256 is a strong algorithm
console.log("token2 ="+token);

var token = jwt.sign({ foo: 'bar' }, key, { expiresIn: '30d' } ); // Compliant: by default signature algorithm is : HS256
console.log("token3 ="+token);

var header = '{"typ":"JWT","alg":"none"}';
var payload = '{"iat":1574933034,"exp":1574936634,"roles":["admin"],"email":"admin@mycompnay","ttl":300}';

var forgedtoken = base64url(header)+"."+base64url(payload)+".xZzaOkBBq7sNS3GQFpFZ5kVD4IQSwxYkh4lJu3_q2Xs";



// VERIFY

// TEST CASES with 'HS256' signed JWT but wrong signature
// {"typ":"JWT","alg":"HS256"}.{"foo":"fakebar","iat":1575644577}.pcX_7snpSGf01uBfaM8XPkbgdhs1gq9JcYRCQvZrJyk
var forgedtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJmYWtlYmFyIiwiaWF0IjoxNTc1NjQ0NTc3fQ.pcX_7snpSGf01uBfaM8XPkbgdhs1gq9JcYRCQvZrJyk";

function callbackcheck(err, tokenPayload = {}) 
{
  console.log('Error: '+err);
}

console.log('Check 2. the library will check if algorithm in forgedtoken matches the algorithms in verify() but still a bad practice to define "none" algorithm');
jwt.verify(forgedtoken, key, { expiresIn: 360000 * 500, algorithms: ['RS256', 'none'] }, callbackcheck); // Noncompliant

console.log('Check 3.');
jwt.verify(forgedtoken, key, { expiresIn: 360000 * 500 }, callbackcheck); // Compliant
// by default signature algorithms are : [ 'HS256', 'HS384', 'HS512' ] if the forged token contains a signature
// or none if the forged token doesn't contain a signature (check 6.), so we should raise anytime because the forged token is controlled by the attacker
// now it's compliant see https://github.com/SonarSource/SonarJS/issues/2457

console.log('Check 4.');
jwt.verify(forgedtoken, key, { expiresIn: 360000 * 500, algorithms: ['RS256', 'HS256'] }, callbackcheck); // Compliant


// TEST CASES with 'none' signed JWT and without a signature 
// NO SIGNATURE {"typ":"JWT","alg":"none"}.{"foo":"fakebar","iat":1575644577}.
var forgedtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJmb28iOiJmYWtlYmFyIiwiaWF0IjoxNTc1NjQ0NTc3fQ.";
console.log('Check 6.');
jwt.verify(forgedtoken, null, { expiresIn: 360000 * 500 }); // Noncompliant: by default signature algorithm is : none

console.log('Check 7.');
jwt.verify(forgedtoken); // Noncompliant: by default signature algorithm is : none

// TEST CASES with 'none' signed JWT but with a signature (obviously no signature is expected because it's "none" but the attacker can still using one)
// {"typ":"JWT","alg":"none"}.{"foo":"fakebar","iat":1575644577}.pcX_7snpSGf01uBfaM8XPkbgdhs1gq9JcYRCQvZrJyk
var forgedtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJmb28iOiJmYWtlYmFyIiwiaWF0IjoxNTc1NjQ0NTc3fQ.pcX_7snpSGf01uBfaM8XPkbgdhs1gq9JcYRCQvZrJyk";

  
function callbackcheck(err, tokenPayload = {}) 
{
  console.log('Error: '+err);
}

console.log('Check 9.');
jwt.verify(forgedtoken, key, { expiresIn: 360000 * 500, algorithms: ['RS256', 'none'] }, callbackcheck); // Noncompliant
// the library report "invalid signature" so it's good, not vulnerable, but defining 'none' as an algorithm is still a bad dev practice

console.log('Check 9 bis.');
let options = { expiresIn: 360000 * 500, algorithms: ['RS256', 'none'] };
jwt.verify(forgedtoken, key, options, callbackcheck); // Noncompliant

console.log('Check 10.');
jwt.verify(forgedtoken, key, { expiresIn: 360000 * 500 }, callbackcheck); // Compliant: by default signature algorithm are : [ 'HS256', 'HS384', 'HS512' ] but it's depend on the forged token (check 3. and check 6.) so we should report, the user should define algorithm
// now it's compliant see https://github.com/SonarSource/SonarJS/issues/2457

console.log('Check 11.');
jwt.verify(forgedtoken, key, { expiresIn: 360000 * 500, algorithms: ['RS256', 'HS256'] }, callbackcheck); // Compliant

// NO SIGNATURE {"typ":"JWT","alg":"none"}.{"foo":"fakebar","iat":1575644577}.
var forgedtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJmb28iOiJmYWtlYmFyIiwiaWF0IjoxNTc1NjQ0NTc3fQ.";
console.log('Check 13.');
jwt.verify(forgedtoken, null, { expiresIn: 360000 * 500 }); // Noncompliant

console.log('Check 14.');
jwt.verify(forgedtoken); // Noncompliant



  
  
  
