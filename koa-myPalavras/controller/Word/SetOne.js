const Word = require('../../models/Word')

module.exports = async ctx => {
  const { name, syllables } = ctx.request.body
  if(!name || !syllables) {
    ctx.status = 400
    ctx.body = "Invalid body"
    return;
  }
  ctx.body = await Word.setOne(name, syllables)
}
