const router = require('express').Router();
const Galaxy = require('../models/galaxy-model');

module.exports.mountPath = '/galaxies'
module.exports.router = router;

router.route('/:id?')
  .get(function (req, res, next) {
    if (req.params.id) {
      Galaxy.getById(req.params.id, req.query.include, function (galaxy) {
        if(galaxy.stack) { return next(galaxy) }
        return res.send(galaxy)
      })
    } else {
      Galaxy.getAll(req.query.include, function (galaxies) {
        if(galaxies.stack) { return next(galaxies) }
        return res.send(galaxies);
      });
    }
  })
  .post(function (req, res, next) {
    Galaxy.create(req.body.name, function (galaxy) {
      if(galaxy.stack) { return next(galaxy) }
      return res.send(galaxy)
    })
  })
  .put(function (req, res, next) {
    res.send('We are working on it....')
  })
  .delete(function (req, res, next) {
    res.send('We are working on it....')
  })
