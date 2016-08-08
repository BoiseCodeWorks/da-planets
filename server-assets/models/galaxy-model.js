; (function () {

  let dataAdapter = require('./data-adapter'),
    uuid = dataAdapter.uuid,
    schemator = dataAdapter.schemator,
    DS = dataAdapter.DS;

  let Galaxy = DS.defineResource({
    name: 'galaxy',
		endpoint: 'galaxies',
    filepath: __dirname + '/../data/galaxies.db',
    relations: {
      hasMany: {
        planet: {
          localField: 'planets',
          foreignKey: 'galaxyId'
        },
        star: {
          localField: 'stars',
          foreignKey: 'galaxyId'
        },
        moon: {
          localField: 'moons',
          foreignKey: 'galaxyId'
        },
        species: {
          localField: 'species',
          foreignKeys: 'galaxyIds'
        }
      }
    }
  })

  function createGalaxy(name, cb) {
    Galaxy.create({
      id: uuid.v1(),
      name: name
    }).then(cb)
  }

  function formatQuery(query){
    if(query){
      query = query.split(',').join(' ').split(' ') 
    }
    let options = {
      with: query 
    }
    return options
  }

  function getAll(query,cb) {
    query = formatQuery(query);
    Galaxy.findAll({}, query).then(cb)
  }

  function getById(id, query, cb){
    query = formatQuery(query);
    Galaxy.find(id, query).then(cb)
  }

  module.exports = {
    createGalaxy,
    getAll,
    getById
  }

} ());