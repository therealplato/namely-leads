var uuid = require('uuid')
var storage = {};
module.exports = storage;

storage.New = function(){
  var s = {
    data: {},
    storeID: uuid.v4(),
  }
  s.Save = saveMemory.bind(s);
  s.List = listMemory.bind(s);
  return s;
}

function saveMemory(obj){
  if(obj.id == undefined){
    obj.id = uuid.v4()
  }
  this.data[obj.id] = obj;
  return obj;
}

function listMemory(){
  var out = [];
  for(key in this.data){
    if( !this.data.hasOwnProperty(key) ){ continue }
    out.push(this.data[key])
  }
  return out
}
