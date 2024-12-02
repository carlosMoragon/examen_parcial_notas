var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/enter', (req, res, next) => {
  if(req.body.name == "Carlos" && req.body.password == "1234"){
    req.session.user ={
      name: req.body.name,
      email: req.body.email
    };

    return res.redirect('/home');
  }else{
    return res.redirect('/login')
  }
    
});

module.exports = router;
