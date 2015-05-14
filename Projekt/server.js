var express     = require('express');
var bodyParser  = require('body-parser');

var config      = require('./config.json');
var user        = require('./user.json');

var app         = express();

user.user.push({matrikelNr: "11089451", name: "Mueller", vorname: "Alexander Jan", eMail: "mueller.alexanderjan@icloud.com"});

for(var i = 0; i < user.user.length; i++)
{
    console.log('----------------------')
    console.log("Matrikel Nr." + user.user[i].matrikelNr);
}
