var express = require ('express');
var app = express();

app.configure(function(){

  //Verzeichnis für public freigeben
  app.use(express.static(/'public'));

  //Errorhandler
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.end(err.status+''+err.messages);
  });

});








app.listen(3000);
