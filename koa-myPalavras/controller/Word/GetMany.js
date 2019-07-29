const Word = require('../../models/Word')

module.exports = async ctx => {
  const limit = Math.trunc(ctx.params.limit)
  if(isNaN(limit) || !isFinite(limit)) {
    ctx.status = 400
    ctx.body = "Invalid Parameter. Please set a integer"
    return
  }
  ctx.body = await Word.getMany(limit)
}
