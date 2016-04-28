var leads = {};
module.exports = leads;

var storage = require("../storage.js");
var Profile = require("./Profile.js");

leads.Profile = function(){
  return new Profile();
}

