var uuid = require('uuid')
var storage = {};
module.exports = storage;

memoryAdapter = {};
storage.Save = function(obj){
  if(obj.id == undefined){
    obj.id = uuid.v4()
  }
  memoryAdapter[obj.id] = obj;
}

storage.List = function(){
  var out = [];
  for(key in memoryAdapter){
    if(!memoryAdapter.hasOwnProperty[key]) continue
    out.push(memoryAdapter[key])
  }
  return out
}
