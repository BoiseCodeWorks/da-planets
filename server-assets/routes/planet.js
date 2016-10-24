const router = require('express').Router();
const Planet = require('../models/planet-model');

module.exports.mountPath = '/planets'
module.exports.router = router;

router.route('/:id?')
  .get(function (req, res, next) {
    if (req.params.id) {
      Planet.getById(req.params.id, req.query.include, function (planet) {
        if(planet.stack) { return next(planet) }
        return res.send(planet)
      })
    } else {
      Planet.getAll(req.query.include, function (planets) {
        if(planets.stack) { return next(planets) }
        return res.send(planets);
      });
    }
  })
  .post(function (req, res, next) {
    Planet.create(req.body, function (planet) {
      if(planet.stack) { return next(planet) }
      return res.send(planet)
    })
  })
  .put(function (req, res, next) {
    res.send('We are working on it....')
  })
  .delete(function (req, res, next) {
    res.send('We are working on it....')
  })
