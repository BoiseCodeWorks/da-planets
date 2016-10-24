const router = require('express').Router();
const Star = require('../models/star-model');

module.exports.mountPath = '/stars'
module.exports.router = router;

router.route('/:id?')
  .get(function (req, res, next) {
    if (req.params.id) {
      Star.getById(req.params.id, req.query.include, function (star) {
        if(star.stack) { return next(star) }
        return res.send(star)
      })
    } else {
      Star.getAll(req.query.include, function (stars) {
        if(stars.stack) { return next(stars) }
        return res.send(stars);
      });
    }
  })
  .post(function (req, res, next) {
    Star.create(req.body, function (star) {
      if(star.stack) { return next(star) }
      return res.send(star)
    })
  })
  .put(function (req, res, next) {
    res.send('We are working on it....')
  })
  .delete(function (req, res, next) {
    res.send('We are working on it....')
  })
