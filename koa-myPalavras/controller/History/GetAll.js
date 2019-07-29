const History = require('../../models/History')

module.exports = async ctx => {
  ctx.body = await History.getAll()
}
