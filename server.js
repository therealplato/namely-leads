var express = require("express");
var app = express();
var server = require('http').createServer(app);

var Leads;
var s = {};

module.exports = function init(config){
  Leads = config.Leads;
  Leads.New();

  app.use( require("connect-logger")() );
  bindRoutes();

  s.start = serverStart;
  s.env = config.env;
  return s
}

function bindRoutes(){
  app.get('/', getRoot);
  app.get('/leads', getLeads);
}

function getRoot(req, res){
  res.status(200).send("foobar")
}

function getLeads(req, res){
  res.status(200).json(Leads.List())
}

function serverStart(){
  server.listen(s.env.port, s.env.host, function(err){
    if(err){ console.log(err)
    } else { console.log("Listening on "+ s.env.host + ":"+s.env.port)}
  })
}
