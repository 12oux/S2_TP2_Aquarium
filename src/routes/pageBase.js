var express = require('express');
var router = express.Router();
var pageBase = require('../controller/pageBase.js');

router.get('/', pageBase.getHomepage);
router.get('/login', pageBase.getLoginPage);
router.post('/login', pageBase.postLogin); 
router.get("/resultats", pageBase.getResultats);
router.post("/resultats", pageBase.postResultats);
router.get('/form', pageBase.getForm);


module.exports = router;