var express = require('express');
var bodyParser = require ('body-parser');
var user = require ('./user.json');
var jsonParser = bodyParser.json();


var app = express();

//Daten erstellen
var data = [
  {title: "Hello World"},
  {title: "Test Titel 2"}
]

//Response senden "Hello World"
app.post('/user', function (req, res){
  ;
});

//Statuscode 200 zurückgeben - alles ok
app.get('/user', function(req,res){
  res.status(200).json(data);
});

//Errorhandler
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.end(err.status + '' + err.messages);
});


app.listen(3000);
