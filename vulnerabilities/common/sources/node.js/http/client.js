const http = require('http')

const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = http.request(options, res => {
    // `res` object is an http.IncomingMessage that represent an incoming HTTP response
    // In general incoming HTTP response content is considered trusted
    eval(res.url) // Compliant
    eval(res.headers['accept']) // Compliant
    
    res.on('data', d => {
      process.stdout.write(d)
    })
})
