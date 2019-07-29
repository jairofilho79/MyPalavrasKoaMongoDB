const History = require('../../models/History')

module.exports = async ctx => {
  const { user } = ctx.params
  ctx.body = await History.getOne(user)
}
