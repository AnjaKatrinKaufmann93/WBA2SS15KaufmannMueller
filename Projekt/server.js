var express = require('express');
var bodyParser = require ('body-parser');
var jsonParser = bodyParser.json();

var app = express();

//Daten erstellen
var data = [
  {title: "Hello World"},
  {title: "Test Titel 2"}
]

//Response senden "Hello World"
app.get('/', function (req, res){
  res.send('Hello World');
});

//Statuscode 200 zurückgeben - alles ok
app.get('/data', function(req,res){
  res.status(200).json(data);
});

//Errorhandler
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.end(err.status + '' + err.messages);
});


app.listen(3000);
