var express     = require('express');
var bodyParser  = require('body-parser')
var config      = require('./config.json')
var app         = express();

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.post('/', function(req, res){
  res.send('POST!');
});


app.listen(config.port);
