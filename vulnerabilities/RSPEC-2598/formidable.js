const http = require('http');
const util = require('util');
const Formidable = require('formidable');

http.createServer((req, res) => {
  if (req.url === '/upload1' && req.method.toLowerCase() === 'post') {
    const form = new Formidable(); // Compliant because
    form.maxFileSize = 500000; 
    form.uploadDir = "./uploads/"; // File destination folder is specified
    form.keepExtensions = false; // And extensions are not kept
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });
      
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload2' && req.method.toLowerCase() === 'post') {
    const form = new Formidable();  // Compliant because
    form.keepExtensions = false;  // extensions are not kept
    form.uploadDir = "./uploads/";  // File destination folder is specified
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload3' && req.method.toLowerCase() === 'post') {
    const form = new Formidable(); // Noncompliant: File destination folder is NOT specified
    form.maxFileSize = 500000;
    form.keepExtensions = false; 
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });
                  
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload4' && req.method.toLowerCase() === 'post') {
    const form = new Formidable(); // Compliant because
    form.uploadDir = "./uploads/"; // File destination folder is specified
    form.maxFileSize = 500000; 
    form.keepExtensions = false; // extensions are not kept
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });
                  
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload5' && req.method.toLowerCase() === 'post') {
    const form = new Formidable(); // Compliant because
    form.keepExtensions = false; // extensions are not kept
    form.maxFileSize = 500000; 
    form.uploadDir = "./uploads/"; // File destination folder is specified
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });
                  
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload6' && req.method.toLowerCase() === 'post') {
    const form = new Formidable(); // Noncompliant because
    form.keepExtensions = true; // keepExtensions set to true
    form.maxFileSize = 500000; 
    form.uploadDir = "./uploads/"; 
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload7' && req.method.toLowerCase() === 'post') {
    const form = new Formidable(); // Compliant keepExtensions not defined but by default keepExtensions is false
    form.maxFileSize = 500000;
    form.uploadDir = "./uploads/";
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  
  if (req.url === '/upload8' && req.method.toLowerCase() === 'post') {
      
    let options = {
        uploadDir: "./uploads/",
        keepExtensions: false
    };
    const form = new Formidable(options); // Compliant keepExtensions not defined but by default keepExtensions is false
      
    form.on('error', function(err) {
      res.write('error:\n\n');
      res.end(util.inspect(err));
    });

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }

  
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(`
    <form action="/upload1" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload1" />
    </form>
    
    <form action="/upload2" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload2" />
    </form>
    
    <form action="/upload3" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload3" />
    </form>
    
    <form action="/upload4" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload4" />
    </form>
    
    <form action="/upload5" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload5" />
    </form>
    
    <form action="/upload6" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload6" />
    </form>
    
    <form action="/upload7" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload7" />
    </form>
    
    <form action="/upload8" enctype="multipart/form-data" method="post">
      <input type="text" name="title" /><br/>
      <input type="file" name="upload" multiple="multiple" /><br/>
      <input type="submit" value="Upload8" />
    </form>
  `);
}).listen(8000); 

