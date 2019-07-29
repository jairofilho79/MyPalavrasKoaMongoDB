const { funcWithConnect } = require('../../common/db')

module.exports = async (limit) => {
  return funcWithConnect('aggregateRandomLimitLookup', [
    'Word',
    {
      from: 'Syllable',
      localField: 'syllables',
      foreignField: '_id',
      as: 'fullSyllables'
    },
    limit
  ])
}
