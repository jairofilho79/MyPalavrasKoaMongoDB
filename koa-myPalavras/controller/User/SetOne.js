const User = require('../../models/User')

module.exports = async (ctx) => {
  const { name } = ctx.request.body
  if(!name) {
    ctx.status = 400
    ctx.body = "Invalid body"
    return;
  }
  ctx.body = await User.setOne(name.toUpperCase())
}
