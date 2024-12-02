var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // Verifica si el usuario está autenticado
  if (!req.session.user) {
    // Si no hay sesión, redirige al login
    return res.redirect('/login');
  }

  // Si el usuario está autenticado, renderiza la página de inicio
  res.render('home', { user: req.session.user });
});


module.exports = router;
