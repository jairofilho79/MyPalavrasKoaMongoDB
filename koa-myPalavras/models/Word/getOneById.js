const mongo = require('mongodb')
const { funcWithConnect } = require('../../common/db')

module.exports = async (id) => {
  const response = await funcWithConnect('lookupMatch', [
    'Word',
    {
      from: 'Syllable',
      localField: 'syllables',
      foreignField: '_id',
      as: 'fullSyllables'
    },
    {_id: new mongo.ObjectID(id)}])
  return response[0] ? response[0] : null
}
