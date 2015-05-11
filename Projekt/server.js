var express     = require('express');
var bodyParser  = require('body-parser')
var config      = require('./config.json');

var jsonParser  = bodyParser.json();
var app         = express();

app.listen(config.port);

app.configure(function(){
  // Freigabe Verzeichnis
  app.use(express.static(__dirname + '/public'));

  //Error Handling
  app.use(function(err,req,res,next) {
    console.error(err.stack);
  });
});
