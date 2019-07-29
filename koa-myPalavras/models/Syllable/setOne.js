const { funcWithConnect } = require('../../common/db')
const get = require('./getOne')

module.exports = async (syllable) => {
  const storaged = await get(syllable)
  if(storaged === null)
    return await funcWithConnect('insertOne', ['Syllable', {name: syllable}])
  return storaged
}
