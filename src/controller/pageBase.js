var passport   = require('passport');
const Resultat = require('../model/dbresultats');


exports.getHomepage = ( req,res,next) => {
    res.render("index", {});
}

exports.getLoginPage = ( req, res , next) => {
    res.render("login", {});
}

exports.postLogin =  (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) {
        return res.json({status: 'error', message: info.message});
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.render("index", {status: 'ok'});
      });
    })(req, res, next);
}

exports.getForm = ( req,res,next) => {
  res.render("form", {title : "Formulaire"});
}


exports.getResultats = async(req, res, next) => {
  let resultats = await Resultat.findAll();
  res.render("resultats", {listeResultats:resultats});
};


exports.postResultats = async (req,res,next) => {
  let nouveauResultat = Resultat.build({
    salinite: req.body.salinite,
    no3: req.body.no3,
    po4: req.body.po4,
    alcalinite: req.body.alcalinite,
    calcium: req.body.calcium,
    magnesium: req.body.magnesium,
    ph: req.body.ph,})
    nouveauResultat.save();
    let resultats = await Resultat.findAll();
    res.render("resultats", {listeResultats:resultats})
}