var leads = {};
module.exports = leads;

var profileStorage = require("../storage.js").New();
var Profile = require("./Profile.js");

leads.New = function(){
  var p = new Profile();
  p.Save(profileStorage)
  return p
}

leads.List = function(){
  return profileStorage.List()
}
