var lip = require('lorem-ipsum').bind(this, { count: 3, units: 'sentences'});
var storage;
var p = {};
module.exports = function (s){
  storage = s;
  return p;
}

p.New = function(cfg){
  placeholder = lip();
  placeholderName = placeholder.split(' ').slice(0,2).join(' ');
  cfg = cfg || {};
  cfg.name = cfg.name || placeholderName;
  cfg.info = cfg.info || placeholder;
  cfg.opted = cfg.opted || false;
  cfg.owner = cfg.owner || null;
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
  this.owner = cfg.owner;
  var that=this;
  this.Save = function(){
    storage.Save(that);
  }
}
