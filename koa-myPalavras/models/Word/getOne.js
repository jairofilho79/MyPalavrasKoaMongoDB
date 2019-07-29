const { funcWithConnect } = require('../../common/db')

module.exports = async (id) => {
  const response = await funcWithConnect('lookupMatch', ['Word', {
    from: 'Syllable',
    localField: 'syllables',
    foreignField: '_id',
    as: 'fullSyllables'
  }, {user: id}])

  return response[0] ? response[0] : null
}
