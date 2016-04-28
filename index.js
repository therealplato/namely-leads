var leads = require('./leads/leads.js');
var config = {
  leads: leads,
  env: {
    host: process.env["LEADS_SERVER_HOST"],
    port: process.env["LEADS_SERVER_PORT"],
  }
}
var server = require('./server.js')(config);
server.start();
