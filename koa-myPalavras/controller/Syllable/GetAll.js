const Syllable = require('../../models/Syllable')

module.exports = async ctx => {
  ctx.body = await Syllable.getAll()
}
