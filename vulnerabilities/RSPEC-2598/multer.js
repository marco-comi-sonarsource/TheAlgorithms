const multer = require('multer')
const express = require('express')
const crypto = require('crypto')

let app = express()

let simpleupload1 = multer(
  { 
    //dest: './uploads/',
    limits: 
      { 
        fileSize: 200000000 
      } 
  }
) // Compliant : no destination specified but memoryStorage will be used

let simpleupload2 = multer(
  { 
    dest: './uploads/',
    limits: 
      { 
        fileSize: 200000000 
      } 
  }
) // Compliant : destination specified

let storage1 = multer.diskStorage({
  /*
  destination: (req, file, cb) => {
    console.log("here 1");
    error = null;
    cb(error, './uploads/')
  },
  filename: (req, file, cb) => {
    console.log("here 2");
    const buf = crypto.randomBytes(20);
    cb(null, buf.toString('hex'))
  }*/
}); // Noncompliant: no destination specified

let diskupload1 = multer({
  storage: storage1, // Noncompliant
  limits: { 
    fileSize: 2000000 
  }
}) // Noncompliant: no destination specified, /var/tmp or /tmp will be used


let storage2 = multer.diskStorage({
  
  destination: (req, file, cb) => {
    console.log("here 1");
    error = null;
    cb(error, './uploads/')
  }, // Compliant: destination defined
  filename: (req, file, cb) => {
    console.log("here 2");
    cb(null, file.originalname)
  }
}); // Compliant: destination specified

let diskupload2 = multer({
  storage: storage2, // Compliant
  limits: { 
    fileSize: 2000000 
  }
}) // Compliant: destination specified





app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/simpleupload1', simpleupload1.single('avatar1'), function (req, res) {
  res.send('Test Compliant simpleupload!');
})

app.post('/simpleupload2', simpleupload2.single('avatar2'), function (req, res) {
  res.send('Test Compliant simpleupload!');
})

app.post('/diskupload1', diskupload1.single('avatar3'), function (req, res) {
  res.send('Test Noncompliant diskupload1!');
})

app.post('/diskupload2', diskupload2.single('avatar4'), function (req, res) {
  res.send('Test Compliant diskupload2!');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
