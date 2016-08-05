;(function(){

  const router = require('express').Router();
  const Planet = require('../models/planet-model');

  module.exports.mountPath = '/planets'
  module.exports.router = router;

  router.route('/:id?')
    .get(function(req, res){
      if(req.params.id){
        Planet.getById(req.params.id, function(planet){
          res.send(planet);
        })
      }else {
        Planet.getAll(function(data){
          res.send(data);
        });
      }
    })
    .post(function(req, res){
      Planet.createPlanet(req.body.name, req.body.galaxyId, function(planet){
        return res.send(planet)
      })
    })
    .put(function(req, res){
      res.send('We are working on it....')
    })
    .delete(function(req, res){
      res.send('We are working on it....')
    })


}());