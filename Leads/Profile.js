module.exports = function Profile(){
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
  p.Save = function(storage){
    storage.Save(that);
  }
}
