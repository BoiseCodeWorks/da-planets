;(function(){

  const router = require('express').Router();
  module.exports.mountPath = '/planets'
  module.exports.router = router;

  router.route('/')
    .get(function(req, res){
      res.send('We are working on it....')
    })


}());