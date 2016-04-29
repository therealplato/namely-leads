var path = require('path');
var partialsApp = require('express')();
partialsApp.set('views', path.join(process.cwd(), 'templates'));
partialsApp.get('/profile', function(req, res){
  res.render('partialProfile');
})

partialsApp.get('/editProfile', function(req, res){
  res.render('partialEditProfile');
})

module.exports = partialsApp;
