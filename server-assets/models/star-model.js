;(function(){

  let dataAdapter = require('./data-adapter'),
    uuid = dataAdapter.uuid,
    schemator = dataAdapter.schemator,
    DS = dataAdapter.DS;

let Star = DS.defineResource({
  name: 'star',
	endpoint: 'stars',
  filepath: __dirname + '/../data/stars.db',
  relations: {
    belongsTo: {
      galaxy: {
        localField: 'galaxy',
        foreignKey: 'galaxyId'
      }
    }
  }
})

schemator.defineSchema('Star', {
  id: {type: 'string', nullable: false},
  name: {type: 'string', nullable: false},
  galaxyId: {type: 'string', nullable: false},
  color: {type: 'enum', enum:['red', 'white', 'yellow', 'blue']} //TODO:: Make this work
})

function createStar(name, galaxyId, color, cb){
  let star = {
    id: uuid.v1(),
    galaxyId: galaxyId,
    name: name,
    color: color
  }

  let error = schemator.validateSync('Star', star)
  if(error){
    return cb(error)
  }
  return Star.create(star).then(cb)
}

function getAll(cb){
 return Star.findAll().then(cb)
}


module.exports = {
  createStar,
  getAll
}

}());