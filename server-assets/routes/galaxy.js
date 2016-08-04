;(function(){

  const router = require('express').Router();
  const Galaxy = require('../models/galaxy-model');

  module.exports.mountPath = '/galaxies'
  module.exports.router = router;

  router.route('/:id?')
    .get(function(req, res){
      Galaxy.getAll(function(galaxies){
        res.send(galaxies);
      });
    })
    .post(function(req, res){
      Galaxy.createGalaxy(req.body.name, function(galaxy){
        return res.send(galaxy)
      })
    })
    .put(function(req, res){
      res.send('We are working on it....')
    })
    .delete(function(req, res){
      res.send('We are working on it....')
    })


}());