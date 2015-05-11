var express     = require('express');
var config      = require('./config.json')
var app         = express();


var data = [
  {title: "Hello World"},
  {title: "Test title 2"}];

app.get('/', function(req, res){
  res.send('Hello World!');
});



app.listen(config.port);
