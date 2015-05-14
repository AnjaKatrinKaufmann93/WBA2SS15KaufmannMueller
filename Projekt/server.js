var express = require('express');
var bodyParser = require ('body-parser');
var users = require ('./user.json');
var jsonParser = bodyParser.json();


users.user.push({name:"Kaufmann",vorname:"Anja",matrikelnummer:11096181});

for (var i=0; i<users.user.length;i++){
  console.log(users.user[i].name +" "+users.user[i].vorname + " " + users.user[i].matrikelnummer);
}
