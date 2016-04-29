var lip = require('lorem-ipsum').bind(this, { count: 4, units: 'sentences'});
var storage;
var p = {};
module.exports = function (s){
  storage = s;
  return p;
}

p.New = function(cfg){
  cfg = cfg || {};
  cfg.name = cfg.name || "Default Company";
  cfg.info = cfg.info || lip();
  cfg.opted = cfg.opted || false;
  cfg.contact = cfg.contact || {
    name: "Jack",
    phone: "555-555-5555",
    email: "jack@jacks.zzz",
  };
  return new Profile(cfg);
}

function Profile(cfg){
  this.name = cfg.name;
  this.info = cfg.info;
  this.contact = cfg.contact;
  this.opted = cfg.opted;
  var that=this;
  this.Save = function(){
    storage.Save(that);
  }
}
