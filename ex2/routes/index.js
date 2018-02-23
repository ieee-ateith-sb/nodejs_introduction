var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login == true)
    res.send('You are logged in.')
  else
    res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  if((req.body.username && req.body.password) && (req.body.username == 'admin' && req.body.password == 'admin')){
    req.session.login = true;
    res.send('You are logged in.')
  }
  else {
    res.redirect('/')
  }

});


router.get('/logout', function(req, res, next) {

    req.session.login = false;
    req.session.destroy()
    res.redirect('/')

});

module.exports = router;
