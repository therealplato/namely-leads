var path = require('path');
var partialsApp = require('express')();
partialsApp.set('views', path.join(process.cwd(), 'templates'));
partialsApp.get('/profile', function(req, res){
  res.render('partialProfile');
})

module.exports = partialsApp;
