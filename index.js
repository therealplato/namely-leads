var Leads = require('./Leads/Leads.js');
var config = {
  env: {
    host: process.env["LEADS_SERVER_HOST"],
    port: process.env["LEADS_SERVER_PORT"],
  }
}
var server = require('./server.js')(config);
server.bindRoutes(Leads);
server.start();
