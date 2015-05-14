var express = require('express');
//var bodyParser = require ('body-parser');
//var jsonParser = bodyParser.json();

var app = express();

app.get('/', function (req, res){
  res.send('Hello World');
});

app.listen(3000);
