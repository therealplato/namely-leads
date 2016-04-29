var Leads
module.exports = function(L){
  Leads = L;
  var routes = {};

  routes.getRoot = getRoot;
  routes.getLogin = getLogin;
  routes.getLogout = getLogout;
  routes.getProfiles = getProfiles;
  routes.getMyProfile = getMyProfile;
  routes.getProfile = getProfile;
  routes.getOpt = getOpt;
  routes.getOptIn = getOptIn;
  routes.getOptOut = getOptOut;

  routes.apiApp = require('./api.js')(L);
  routes.partialsApp = require('./partials.js');
  return routes;
}

function getRoot(req, res){
  var user;
  if(req.session.user){
    user = req.session.user;
  }
  res.render('index', {
    title: 'Namely Leads Overview',
    user: user,
  })
}

function getLogin(req, res){
  req.session.user = req.params.id;
  res.redirect('/myprofile');
}

function getLogout(req, res){
  req.session.user = null;
  res.redirect('/');
}

function getOpt(req, res){
  var p = Leads.GetUserProfile(req.session.user);
  res.render('opt', p)
}
function getOptIn(req, res){
  var p = Leads.GetUserProfile(req.session.user);
  p.opted = true;
  p.Save();
  res.redirect('/myprofile')
}
function getOptOut(req, res){
  var p = Leads.GetUserProfile(req.session.user);
  p.opted = false;
  p.Save();
  res.redirect('/')
}

function getProfiles(req, res){
  if(!req.session.user){
    return res.render('unauthorized')
  } else {
    var user = req.session.user;
  }
  var profile = Leads.GetUserProfile(user);
  if(profile.opted == null){
    return res.redirect('opt')
  }
  res.render('allProfiles', {
    title: 'All Profiles',
    user: user,
  })
}

function getMyProfile(req, res){
  if(!req.session.user){
    return res.render('unauthorized')
  } else {
    var user = req.session.user;
  }
  var profile = Leads.GetUserProfile(user);
  console.log(profile);
  if(profile.opted == null){
    return res.redirect('opt')
  }
  res.render('myProfile', {
    title: 'My Company Profile',
    user: user,
  })
}

function getProfile(req, res){
  var id = req.param('id');
  res.render('oneProfile', {
    id: id
  })
}
