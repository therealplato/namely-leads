var Leads
module.exports = function(L){
  Leads = L;
  var routes = {};
  routes.getRoot = getRoot;
  routes.getLeads = getLeads;
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

function getLeads(req, res){
  res.status(200).json(Leads.List())
}

function getProfile(req, res){
  var id = req.param('id');
  res.render('oneProfile', {
    id: id
  })
}
