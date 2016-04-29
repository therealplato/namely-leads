var path = require("path");
var cookieSession = require("cookie-session");
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
  app.use('/api', routes.apiApp);
  app.use('/partials', routes.partialsApp);

  app.use(cookieSession({keys:['key1']}))
  app.use(function(req, res, next){
    if(req.session.isNew){
      req.session.user = "defaultUserId";
    }
    next()
  })
  app.get('/', routes.getRoot);
  app.get('/login/:id', routes.getLogin);
  app.get('/profiles', routes.getProfiles);
  app.get('/profile/:id', routes.getProfile);
}

function serverStart(){
  server.listen(s.env.port, s.env.host, function(err){
    if(err){ console.log(err)
    } else { console.log("Listening on "+ s.env.host + ":"+s.env.port)}
  })
}
