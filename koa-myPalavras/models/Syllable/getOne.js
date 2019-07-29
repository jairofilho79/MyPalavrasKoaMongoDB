const { funcWithConnect } = require('../../common/db')

module.exports = async (syllable) => {
  return funcWithConnect('findOne', ['Syllable', {name: syllable}])
}
