var apiApp = require('express')()
module.exports = function(Leads){
  apiApp.get('/profile/:id', function(req, res){
    var id = req.param("id")
    var profile = Leads.Get(id);
    res.status(200).json(profile);
  })
  return apiApp
}
