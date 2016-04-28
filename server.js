var express = require("express");
var logger = require("connect-logger");

module.exports = init;
var s = {};

function init(config){
  console.log(config)
  s.env = config.env;
  return s
}


var app = express();
app.use(logger());

var server = require('http').createServer(app);

s.start = function(){
  server.listen(s.env.port, s.env.host, function(err){
    if(err){ console.log(err) } else {console.log("Listening on "+ s.env.host + ":"+s.env.port)}
  })
}

s.bindRoutes = function(Leads){
  s.Leads = Leads
  app.get('/', getRoot);
  app.get('/leads', getLeads);
}

function getRoot(req, res){
  res.status(200).send("foobar")
}

function getLeads(req, res){
  res.status(200).json(s.Leads.List())
}
