
(function () {
  "use strict";

  var expat = require('node-expat')
var fs = require('fs');
  var parser = new expat.Parser('UTF-8')

  parser.on('startElement', function (name, attrs) {
    console.log(name, attrs)
  })

  parser.on('endElement', function (name) {
    console.log(name)
  })

  parser.on('text', function (text) {
    console.log(text)
  })

  parser.on('entityDecl', function (entityName, isParameterEntity, value, base, systemId, publicId, notationName) {
    
    console.log("entity");
    console.log("entityName="+entityName);
    console.log("isParameterEntity="+isParameterEntity);
    console.log("value="+value);
    console.log("base="+base);
    
    
  }
    
    
  )
  
  parser.on('error', function (error) {
    console.error(error)
  })

  var xml = fs.readFileSync('xxe.xml', 'utf8');
  parser.write(xml);

}()) 
