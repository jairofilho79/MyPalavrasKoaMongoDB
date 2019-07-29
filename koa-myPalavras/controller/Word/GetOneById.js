const Word = require('../../models/Word')

module.exports = async ctx => {
  const { id } = ctx.params
  ctx.body = await Word.getOneById(id)
}
