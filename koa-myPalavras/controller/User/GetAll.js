const User = require('../../models/User')

module.exports = async (ctx) => {
  ctx.body = await User.getAll()
}
