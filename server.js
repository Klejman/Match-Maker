//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creates express server and sets up a port
var app = express();
var port = process.env.PORT || 3000;
// app.set('port', process.env.PORT || 3000);

// Sets up middleware for compatibility algorithm
app.use(bodyParser.json());// parse application/json
app.use(bodyParser.urlencoded({extended: true}));// parse application/x-www-form-urlencoded
app.use(bodyParser.text());
//vendor specific mime type that listens to this app
app.use(bodyParser.json({type:'application/vnd.api+json'}));// parse application/vnd.api+json as json

// Sets the static files location
app.use(express.static('app/public'));

// Require Routes using an IIFE
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
//  app.use(app.router);


//Listening on PORT ...
app.listen(port, function() {
  console.log("Listening on port: ", port);
});
// app.listen(app.get('port'));
// app.listen(PORT, function(){
//   console.log("Listening on port : ", PORT);
// });