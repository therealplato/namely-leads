var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);

var Leads;
var s = {};

var testLead;
module.exports = function init(config){
  Leads = config.Leads;

  app.use( require("connect-logger")() );
  app.use(express.static('web/'));
  app.set('view engine', 'jade');
  app.set('views', path.join(process.cwd(), 'templates'));
  bindRoutes();

  s.start = serverStart;
  s.env = config.env;
  return s
}

function bindRoutes(){
  var routes = require('./routes/index.js')(Leads);
  app.get('/', routes.getRoot);
  app.get('/leads', routes.getLeads);
  app.get('/profile/:id', routes.getProfile);
  app.use('/api', routes.apiApp);
  app.use('/partials', routes.partialsApp);
}

function serverStart(){
  server.listen(s.env.port, s.env.host, function(err){
    if(err){ console.log(err)
    } else { console.log("Listening on "+ s.env.host + ":"+s.env.port)}
  })
}
