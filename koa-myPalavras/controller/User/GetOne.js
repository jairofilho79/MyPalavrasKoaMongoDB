const User = require('../../models/User')

module.exports = async (ctx) => {
  const { name } = ctx.params
  ctx.body = await User.getOne(name.toUpperCase())
}
