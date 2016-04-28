var storage = require("../storage.js");
var leads = {};
module.exports = leads;

leads.Profile = function(){
  return new Profile();
}

function Profile(){
  p = {
    name: "Jack's Lumber",
    info: "We sell wood",
    contact: {
      name: "Jack",
      phone: "555-555-5555",
      email: "jack@jacks.zzz",
    }
  }
  var that=this;
  p.Save = function(){
    storage.Save(that);
  }
}
