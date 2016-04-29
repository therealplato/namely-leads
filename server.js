var express = require("express");
var app = express();
var server = require('http').createServer(app);

var Leads;
var s = {};

var testLead;
module.exports = function init(config){
  Leads = config.Leads;
  testLead = Leads.New();
  console.log(testLead);

  app.use( require("connect-logger")() );
  bindRoutes();

  s.start = serverStart;
  s.env = config.env;
  return s
}

function bindRoutes(){
  var routes = require('./routes/index.js')(Leads);
  app.get('/', routes.getRoot);
  app.get('/leads', routes.getLeads);
  app.use('/api', routes.apiApp);
}

function serverStart(){
  server.listen(s.env.port, s.env.host, function(err){
    if(err){ console.log(err)
    } else { console.log("Listening on "+ s.env.host + ":"+s.env.port)}
  })
}
