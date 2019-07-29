const { funcWithConnect } = require('../../common/db')

// module.exports = async () => {
//   return await funcWithConnect('find', ['Word'])
// }

module.exports = async () => {
  return funcWithConnect('lookup', ['Word', {
    from: 'Syllable',
    localField: 'syllables',
    foreignField: '_id',
    as: 'fullSyllables'
  }])
}
