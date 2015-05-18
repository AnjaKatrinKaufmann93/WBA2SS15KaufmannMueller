var express = require('express');
var bodyParser = require ('body-parser');
var users = require ('./user.json');
var jsonParser = bodyParser.json();
var redis = require('redis');

var app = express();
//var dh = redis();

app.use(bodyParser.json()); //support Json-encoded bodies

users.user.push({name:"Kaufmann",vorname:"Anja",matrikelnummer:11096181});

for (var i=0; i<users.user.length;i++){
  console.log(users.user[i].name +" "+users.user[i].vorname + " " + users.user[i].matrikelnummer);
}

app.get('/', function(req,res){
  res.json(users);
});

app.post('/users', jsonParser, function(req,res){
  var newUser = (req.body); //hinzufügen eines neuen Users
  res.type('plain').send('hinzugefügt');
});

app.listen(3000);
