let dataAdapter = require('./data-adapter'),
  uuid = dataAdapter.uuid,
  schemator = dataAdapter.schemator,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

let Galaxy = DS.defineResource({
  name: 'galaxy',
  endpoint: 'galaxies',
  filepath: __dirname + '/../data/galaxies.db',
  relations: {
    hasMany: {
      star: {
        localField: 'stars',
        foreignKey: 'galaxyId'
      },
      planet: {
        localField: 'planets',
        foreignKey: 'galaxyId'
      }
    }
  }
})

schemator.defineSchema('Galaxy', {
  id: {
    type: 'string',
    nullable: false
  },
  name: {
    type: 'string',
    nullable: false
  }
})



function create(name, cb) {
  // Use the Resource Model to create a new galaxy
  let galaxy = { id: uuid.v4(), name: name };
  
  let error = schemator.validateSync('Galaxy', galaxy)
  
  if(error){
    error.stack
    return cb(error);
  }

  Galaxy.create(galaxy).then(cb).catch(cb)
}

function getAll(query, cb) {
  //Use the Resource Model to get all Galaxies
  Galaxy.findAll({}).then(cb).catch(cb)
}

function getById(id, query, cb) {
  // use the Resource Model to get a single galaxy by its id
  Galaxy.find(id, formatQuery(query)).then(cb).catch(cb)
}

module.exports = {
  create,
  getAll,
  getById
}

