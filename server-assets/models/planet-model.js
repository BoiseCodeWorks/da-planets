; (function () {

  let uuid = require('node-uuid'),
    JsData = require('js-data'),
    NeDbAdapter = require('js-data-nedb'),
    adapter = new NeDbAdapter(),
    DS = new JsData.DS();

DS.registerAdapter('nedb', adapter, {default: true})

  let Planet = DS.defineResource({
    name: 'planet',
    filepath: __dirname+'/../data/planets.db',
  })

  function createPlanet(name) {
    return Planet.create({
      id: uuid.v1(),
      name: name
    })
  }

  function getAll(cb) {
    Planet.findAll().then(function(planets){
      return cb(planets)
    })
  }

  module.exports = {
    getAll,
    createPlanet
  }


} ());