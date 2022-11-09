const http = require('http');
const url = require('url');

http.createServer( function(req, res) {
  const parsedUrl = url.parse(req.url, true);

  // Sink when setting 'Location'
  res.setHeader('refresh', '0;url='+parsedUrl.query.url);
  
  res.writeHead(parsedUrl.query.code);

  res.end();
}).listen(3002);

// BAD http://localhost:3002/?code=302&url=http://google.com
