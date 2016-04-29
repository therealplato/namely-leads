var apiApp = require('express')()
module.exports = function(Leads){
  apiApp.get('/profile/:id', function(req, res){
    res.status(200).json(Leads.Get(id));
  })
  return apiApp
}
