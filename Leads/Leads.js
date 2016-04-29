var _ = require('underscore');
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

leads.GetUserProfile = function(id){
  var all = profileStorage.List()
  var matches = _.filter(all, function(x){ return x.owner == id })
  if(matches.length == 0) {
    var p = Profile.New({owner: id})
    p.Save();
    return p;
  }
  return matches[0];
}
