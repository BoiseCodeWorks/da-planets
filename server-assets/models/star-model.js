let dataAdapter = require('./data-adapter'),
  uuid = dataAdapter.uuid,
  schemator = dataAdapter.schemator,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

let Star = DS.defineResource({
  name: 'star',
  endpoint: 'stars',
  filepath: __dirname + '/../data/stars.db',
  relations: {
    belongsTo: {
      galaxy: {
        localField: 'galaxy',
        localKey: 'galaxyId'
      }
    },
    hasMany: {
      planet: {
        localField: 'planets',
        foreignKey: 'starId'
      }
    }
  }
})


function create(star, cb) {
  // Use the Resource Model to create a new star
  Star.create({ id: uuid.v4(), name: star.name, galaxyId: star.galaxyId}).then(cb).catch(cb)
}

function getAll(query, cb) {
  //Use the Resource Model to get all Galaxies
  Star.findAll({}).then(cb).catch(cb)
}

function getById(id, query, cb) {
  // use the Resource Model to get a single star by its id
  Star.find(id, formatQuery(query)).then(cb).catch(cb)
}

module.exports = {
  create,
  getAll,
  getById
}

