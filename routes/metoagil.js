var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('metoagil', { title: 'Express'
  });
  });

  

module.exports = router;