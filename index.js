var Leads = require('./Leads/Leads.js');
var serverConfig = {
  env: {
    host: process.env["LEADS_SERVER_HOST"],
    port: process.env["LEADS_SERVER_PORT"],
  }
}
var server = require('./server.js')(serverConfig);

server.bindRoutes(Leads);
server.start();
