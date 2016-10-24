; (function () {

  let dataAdapter = require('./data-adapter'),
    uuid = dataAdapter.uuid,
    schemator = dataAdapter.schemator,
    DS = dataAdapter.DS;

  let Galaxy = DS.defineResource({
    name: 'galaxy',
		endpoint: 'galaxies',
    filepath: __dirname + '/../data/galaxies.db',
    relations: {}
  })

  function create(name, cb) {
    // Use the Resource Model to create a new galaxy
    Galaxy.create({id: uuid.v4(), name: name}).then(cb).catch(cb)
  }

  function getAll(query,cb) {
    //Use the Resource Model to get all Galaxies
    Galaxy.findAll({}).then(cb)
  }

  function getById(id, query, cb){
    // use the Resource Model to get a single galaxy by its id
    Galaxy.find(id).then(cb).catch(cb)
  }

  module.exports = {
    create,
    getAll,
    getById
  }

} ());