var _ = require('underscore');
var apiApp = require('express')();

module.exports = function(Leads){
  apiApp.get('/profile/:id', function(req, res){
    var id = req.param("id")
    var profile = Leads.Get(id);
    res.status(200).json(profile);
  })

  apiApp.get('/profiles', function(req, res){
    var profiles = Leads.List();
    profiles = _.filter(profiles, function(p){
      return p.opted
    })
    res.status(200).json(profiles);
  })

  apiApp.get('/optin/:id', function(req, res){
    var id = req.param("id")
    var profile = Leads.Get(id);
    profile.opted = true;
    profile.Save();
    res.status(200).json(profile);
  })

  apiApp.get('/optout/:id', function(req, res){
    var id = req.param("id")
    var profile = Leads.Get(id);
    profile.opted = false;
    profile.Save();
    res.status(200).json(profile);
  })

  return apiApp
}
