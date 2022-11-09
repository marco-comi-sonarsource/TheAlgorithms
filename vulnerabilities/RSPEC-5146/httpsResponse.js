const https = require('https');
const url = require('url');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

https.createServer(options, function(req, res) {
  const parsedUrl = url.parse(req.url, true);

  // Sink on 2nd arg Location field
  res.writeHead(parsedUrl.query.code, {Location: parsedUrl.query.url});

  res.end();
}).listen(3002);

// BAD https://localhost:3002/?code=302&url=http://google.com
