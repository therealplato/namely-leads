var _ = require('underscore');
var apiApp = require('express')();

module.exports = function(Leads){
  apiApp.get('/profile/:id', function(req, res){
    var id = req.param("id")
    var profile = Leads.Get(id);
    res.status(200).json(profile);
  })

  apiApp.post('/profile', function(req, res){
    var body = req.body
    var id = body.id
    if(id == undefined){
      var profile = Leads.New(body);
    } else {
      var profile = Leads.Get(body.id);
      _.extend(profile, body);
      profile.Save();
    }
    res.status(200).json(profile);
  })

  apiApp.get('/profileForUser/:id', function(req, res){
    var id = req.param("id")
    var profile = Leads.GetUserProfile(id);
    res.status(200).json(profile);
  })

  apiApp.get('/profiles', function(req, res){
    var profiles = Leads.List();
    listed = _.filter(profiles, function(p){
      return p.opted
    })
    promoted = _.filter(listed, function(p){
      return p.promoted
    })
    unpromoted = _.reject(listed, function(p){
      return p.promoted
    })
    ordered = promoted.concat(unpromoted)
    res.status(200).json(ordered);
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
