var express = require('express')
var router = express.Router()

const models = require('../models')

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.Users.find({}, 'name', function (err, users) {
    if (err)
      res.json({
        error: {
          message: 'Connection error'
        }
      })
    else
      res.json(users)

  })
})


router.post('/', function (req, res, next) {
  let username = req.body.username
  let password = req.body.password
  let name = req.body.name
  let type = req.body.type

  let newUser = new models.Users(
    {
      username: username,
      passwprd: password,
      name: name,
      type: type
    })

  newUser.save()
    .then((user) => {
      res.json(user)
    })
})


/* GET users listing. */
router.delete('/:id', function (req, res, next) {
  let id = req.params.id

  models.Users.deleteOne({ _id: id }, function (err) {
    if(err){
      res.json({
        error: {
          message: err.message
        }
      })
    }
    else {
      res.json({
        message: "User deleted."
      })
    }
  });

})

module.exports = router
