var Leads
module.exports = function(L){
  Leads = L;
  var routes = {};
  routes.getRoot = getRoot;
  routes.getLeads = getLeads;
  routes.apiApp = require('./api.js')(L);
  return routes;
}

function getRoot(req, res){
  res.status(200).send("foobar")
}

function getLeads(req, res){
  res.status(200).json(Leads.List())
}

