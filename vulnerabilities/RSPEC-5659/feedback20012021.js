const jwt = require('jsonwebtoken')

let verify = true;
// signed with none
var forgedtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJmb28iOiJmYWtlYmFyIiwiaWF0IjoxNTc1NjQ0NTc3fQ.";
let publicKey = "bar";

try {
	if (verify) {
		jwt.verify(forgedtoken, publicKey);
	}

	const [, payload] = token.split('.');

	return JSON.parse(atob(payload));
} catch (error) {
	console.log(error.message);
}
