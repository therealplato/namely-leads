var Leads
module.exports = function(L){
  Leads = L;
  var routes = {};
  routes.getRoot = getRoot;
  routes.getLogin = getLogin;
  routes.getLogout = getLogout;
  routes.getProfiles = getProfiles;
  routes.getProfile = getProfile;
  routes.apiApp = require('./api.js')(L);
  routes.partialsApp = require('./partials.js');
  return routes;
}

function getRoot(req, res){
  var user;
  if(req.session.isPopulated){
    user = req.session.user;
  }
  res.render('index', {
    title: 'Namely Leads Index',
    foo: 'FooBar',
    user: user,
  })
}

function getLogin(req, res){
  req.session.user = req.params.id;
  res.redirect('/');
}

function getLogout(req, res){
  req.session.user = null;
  res.redirect('/');
}

function getProfiles(req, res){
  res.render('allProfiles')
}

function getProfile(req, res){
  var id = req.param('id');
  res.render('oneProfile', {
    id: id
  })
}
