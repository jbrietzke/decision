'use strict';
var router = require('express').Router();
var User = require('../../db/models/user');
module.exports = router;

router.use('/members', require('./members'));

router.put('/user/:id', function(req, res, next){
  console.log("We made it")
  User.findById(req.params.id)
  .then(function(found){
    console.log(req.body);
    found.update(req.body)
  })
  .then(function(){
    res.sendStatus(200);
  })

})
;
router.get('/', function(req, res, next){
  User.findAll({
    order : 'id ASC'
  })
  .then(function(allUsers){
    res.json(allUsers);
  })
});



router.post('/user', function(req, res, next){
  User.create(req.body)
  .then(function(createdUser){
    res.json(createdUser)
  })
})


router.get('/user/:id', function(req, res, next){
  User.findById(req.params.id)
  .then(function(found){
    res.json(found);
  })
})


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
