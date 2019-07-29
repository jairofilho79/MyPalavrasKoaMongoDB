const Word = require('../../models/Word')

module.exports = async ctx => {
  const { name } = ctx.params
  ctx.body = await Word.getOne(name)
}
