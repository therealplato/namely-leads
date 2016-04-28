var storage;
var p = {};
module.exports = function (s){
  storage = s;
  return p;
}

p.New = function(){
  return new Profile();
}

function Profile(){
  this.name = "Jack's Lumber",
  this.info = "We sell wood",
  this.contact = {
    name: "Jack",
    phone: "555-555-5555",
    email: "jack@jacks.zzz",
  }
  var that=this;
  this.Save = function(){
    storage.Save(that);
  }
}
