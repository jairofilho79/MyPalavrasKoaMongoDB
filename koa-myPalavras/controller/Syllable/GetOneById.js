const Syllable = require('../../models/Syllable')

module.exports = async ctx => {
  const { id } = ctx.params
  ctx.body = await Syllable.getOneById(id)
}
