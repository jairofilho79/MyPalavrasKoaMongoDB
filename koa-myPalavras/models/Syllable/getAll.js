const { funcWithConnect } = require('../../common/db')

module.exports = async () => {
  return await funcWithConnect('find', ['Syllable'])
}
