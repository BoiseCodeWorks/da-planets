; (function () {

  const router = require('express').Router();
  const Moon = require('../models/moon-model');

  module.exports.mountPath = '/moons'
  module.exports.router = router;

  router.route('/:id?')
    .get(function (req, res) {
      Moon.getAll(function (data) {
        res.send(data);
      });
    })
    .post(function (req, res) {
      Moon.createMoon(req.body.name, req.body.galaxyId, req.body.planetId, function (moon) {
        return res.send(moon)
      })
    })
    .put(function (req, res) {
      res.send('We are working on it....')
    })
    .delete(function (req, res) {
      res.send('We are working on it....')
    })


} ());