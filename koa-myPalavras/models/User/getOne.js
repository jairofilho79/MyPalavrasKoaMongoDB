const { funcWithConnect } = require('../../common/db')

module.exports = async (user) => {
  return funcWithConnect('findOne', ['User', {username: user}])
}
