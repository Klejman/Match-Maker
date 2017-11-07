//Dependency
var path = require('path');

//Overwrites the exports key in the module object
module.exports = function(app){

//GET request
  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // If no matching route is found default to home
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

};