//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan'),
    http = require('http'),
    bodyParser = require('body-parser');
    

/*
app.get('/', function (req, res) {
  
    res.render('index.ejs', { pageCountMessage : "Getting There" });
  
});
*/

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});
/*
initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});
*/
/////////////////////////MARK - Application API///////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//////////////////////////////////////////////////////////////////////

//app.listen(8080);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
