const mongo = require('mongodb')
const { funcWithConnect } = require('../../common/db')

module.exports = async (id) => {
  return funcWithConnect('findOne', ['Syllable', {_id: new mongo.ObjectID(id)}])
}
