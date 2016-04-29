var Leads
module.exports = function(L){
  Leads = L;
  var routes = {};
  routes.getRoot = getRoot;
  routes.getProfiles = getProfiles;
  routes.getProfile = getProfile;
  routes.apiApp = require('./api.js')(L);
  routes.partialsApp = require('./partials.js');
  return routes;
}

function getRoot(req, res){
  res.render('index', {
    title: 'Namely Leads Index',
    foo: 'FooBar'
  })
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
