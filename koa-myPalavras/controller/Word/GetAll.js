const Word = require('../../models/Word')

module.exports = async ctx => {
  ctx.body = await Word.getAll()
}
