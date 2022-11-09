const beeline = require('beeline');
const http = require('http')

const port = 3001;

var router = beeline.route({
  // request is an http.IncomingMessage
  // response is an http.ServerResponse 
  '/': function(request, response){

    eval(request.headers.accept); // Noncompliant (S5334)
    response.write(request.headers.accept) // Noncompliant (S5131)
  },
  // curl http://localhost:3001/console.log\(1+1\)/0    
  '/`a`/`b`': function(request, response, tokens, values){

    eval(tokens.a); // Noncompliant (S5334)
    eval(values[0]); // Noncompliant (S5334)
    response.end() // Noncompliant (S5131)
  }
});

// `router.add` behave in the same way than `beeline.route`
router.add({'/': function(request, response) {
  eval(request.headers.accept); // Noncompliant
}})

var server = http.createServer(router);
server.listen(port);