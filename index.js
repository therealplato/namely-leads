var store = require('./storage.js').New();
var Leads = require('./Leads/Leads.js')(store);
var serverConfig = {
  Leads: Leads,
  env: {
    host: process.env["LEADS_SERVER_HOST"],
    port: process.env["LEADS_SERVER_PORT"],
  }
}

var server = require('./server.js')(serverConfig);

server.start();
