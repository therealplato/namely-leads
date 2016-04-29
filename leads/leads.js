var leads = {};
var profileStorage;
var Profile;

module.exports = function(storage){
  profileStorage = storage;
  Profile = require("./Profile.js")(storage);
  return leads;
};

leads.New = function(cfg){
  cfg = cfg || {};
  var p = Profile.New(cfg);
  p.Save()
  return p
}

leads.List = function(){
  return profileStorage.List()
}

leads.Get = function(id){
  return profileStorage.Get(id)
}
