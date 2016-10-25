const router = require('express').Router();
const Moon = require('../models/moon-model');

module.exports.mountPath = '/moons'
module.exports.router = router;

router.route('/:id?')
  .get(function (req, res, next) {
    if (req.params.id) {
      Moon.getById(req.params.id, req.query.include, function (moon) {
        if(moon.stack) { return next(moon) }
        return res.send(moon)
      })
    } else {
      Moon.getAll(req.query.include, function (moons) {
        if(moons.stack) { return next(moons) }
        return res.send(moons);
      });
    }
  })
  .post(function (req, res, next) {
    Moon.create(req.body, function (moon) {
      if(moon.stack) { return next(moon) }
      return res.send(moon)
    })
  })
  .put(function (req, res, next) {
    res.send('We are working on it....')
  })
  .delete(function (req, res, next) {
    res.send('We are working on it....')
  })
