const { funcWithConnect } = require('../../common/db')

module.exports = async () => {
  return await funcWithConnect('aggregate', [
    'History',
    [
      {
        $lookup: {
          from: 'enum_Exists',
          localField: 'exists',
          foreignField: 'num',
          as: 'exists'
        }
      },
      {
        $lookup: {
          from: 'User',
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $lookup: {
          from: 'Syllable',
          localField: 'syllables',
          foreignField: '_id',
          as: 'fullSyllables'
        }
      }
    ]
  ])
}
