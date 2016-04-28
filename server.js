var Leads = require("./Leads/Leads.js");
var express = require("express");
var logger = require("connect-logger");
var app = express();
app.use(logger());
var server = require('http').createServer(app);

var s = {};
s.start = serverStart;
s.bindRoutes = bindRoutes;

module.exports = init;
function init(config){
  s.env = config.env;
  console.log(s)
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
