const User = require('../../models/User')

module.exports = async (ctx) => {
  const { id } = ctx.params
  ctx.body = await User.getOneById(id)
}
