const { funcWithConnect } = require('../../common/db')
const get = require('./getOne')

module.exports = async (user) => {
  const storaged = await get(user)
  if(storaged === null)
    return await funcWithConnect('insertOne', ['User', {username: user}])
  return storaged
}
