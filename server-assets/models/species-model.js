; (function () {

  let dataAdapter = require('./data-adapter'),
    uuid = dataAdapter.uuid,
    schemator = dataAdapter.schemator,
    DS = dataAdapter.DS;

  let Planet = require('./planet-model').Planet;

  let Species = DS.defineResource({
    name: 'species',
		endpoint: 'species',
    filepath: __dirname + '/../data/species.db',
    relations: {
      hasMany: {
        planet: {
          localField: 'planets',
          localKeys: 'planetIds'
        },
        galaxy: {
          localField: 'galaxies',
          localKeys: 'galaxyIds'
        }
      }
    }
  })

  function createSpecies(name, cb) {
    Species.create({
      id: uuid.v1(),
      name: name,
      galaxyIds: {},
      planetIds: {}
    }).then(cb)
  }


  function inhabitPlanet(speciesId, planetId, cb) {
    Species.find(speciesId).then(
      function (species) {
        Planet.find(planetId).then(
          function (planet) {
						species.planetIds = species.planetIds || {}
            species.planetIds[planetId] = planetId
            Species.update(speciesId, species).then(
              function (sp) {
                console.log(sp)
                return cb(sp)
              })
          })
      })
  }



  function formatQuery(query) {
    if (query) {
      query = query.split(',').join(' ').split(' ')
    }
    let options = {
      with: query
    }
    return options
  }

  function getAll(query, cb) {
    query = formatQuery(query);
    Species.findAll({}, query).then(cb)
  }

  function getById(id, query, cb) {
    query = formatQuery(query);
    Species.find(id, query).then(cb)
  }

  module.exports = {
    createSpecies,
    getAll,
    getById,
    inhabitPlanet
  }

} ());