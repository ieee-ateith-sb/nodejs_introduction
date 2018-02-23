var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {

  res.json({
    error: {
      message: 'Unsupported get request.',
    }
  })

})

module.exports = router
