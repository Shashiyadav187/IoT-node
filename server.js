
var express = require('express');
var app = express();
const coap    = require('coap'); // or coap
const server  = coap.createServer();

app.use(express.static(__dirname + '/public'));


server.on('request', function(req, res) {
  console.log('Hello ' + req.url.split('/')[1] + '\n')
  // res.end('Hello ' + req.url.split('/')[1] + '\n')
})

server.listen(function() {
  console.log('server started')
})

app.listen(3000);

console.log("Server running on port 3000");