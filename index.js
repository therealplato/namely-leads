var store = require('./storage.js').New();
var Leads = require('./Leads/Leads.js')(store);

Leads.New({
  name: "Haggar Pants",
  info: "Do your employees lack pants? We can help!",
  opted: true,
  owner: "Barnaby Jones"
});
Leads.New({
  name: "Horse Island",
  info: "It is the dream of every horse to retire on a four thousand acre tropical island with abundant coconuts, date palms, freshwater streams and unlimited grazing rights. Call today!",
  opted: true, 
  owner: "Randy Randalman"
});
console.log(Leads.List());

var serverConfig = {
  Leads: Leads,
  env: {
    host: process.env["LEADS_SERVER_HOST"],
    port: process.env["LEADS_SERVER_PORT"],
  }
}

var server = require('./server.js')(serverConfig);

server.start();
