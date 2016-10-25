let dataAdapter = require('./data-adapter'),
  uuid = dataAdapter.uuid,
  schemator = dataAdapter.schemator,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

let Planet = DS.defineResource({
  name: 'planet',
  endpoint: 'planets',
  filepath: __dirname + '/../data/planets.db',
  relations: {
    belongsTo: {
      star: {
        localField: 'star',
        localKey: 'starId',
        parent: true
      },
      galaxy: {
        localField: 'galaxy',
        localKey: 'galaxyId',
      }
    },
    hasMany: {
      moon: {
        localField: 'moons',
        foreignKey: 'planetId'
      }
    }
  }
})

schemator.defineSchema('Planet', {
  id: {
    type: 'string',
    nullable: false
  },
  name: {
    type: 'string',
    nullable: false
  },
  starId: {
    type: 'string',
    nullable: false
  },
  galaxyId: {
    type: 'string',
    nullable: false
  }
})

function create(planet, cb) {
  // Use the Resource Model to create a new planet

  DS.find('star', planet.starId).then(function(star){
    let planetObj = { 
      id: uuid.v4(),
      name: planet.name,
      galaxyId: star.galaxyId, 
      starId: planet.starId
    }

    let error = schemator.validateSync('Planet', planetObj);
    if(error){
      return cb(error)
    }

    Planet.create(planetObj)
    .then(cb).catch(cb)
  }).catch(cb)
}

function getAll(query, cb) {
  //Use the Resource Model to get all Galaxies
  Planet.findAll({}, formatQuery(query)).then(cb).catch(cb)
}

function getById(id, query, cb) {
  // use the Resource Model to get a single planet by its id
  Planet.find(id, formatQuery(query)).then(cb).catch(cb)
}

module.exports = {
  create,
  getAll,
  getById
}

