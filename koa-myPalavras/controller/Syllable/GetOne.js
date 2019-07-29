const Syllable = require('../../models/Syllable')

module.exports = async ctx => {
  const { name } = ctx.params
  ctx.body = await Syllable.getOne(name)
}
