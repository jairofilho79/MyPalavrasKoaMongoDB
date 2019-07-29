const History = require('../../models/History')

module.exports = async ctx => {
  const { user, is_correct, exists, syllables } = ctx.request.body
  if(!user || !is_correct || !exists || !syllables) {
    ctx.status = 400
    ctx.body = "Invalid body"
    return;
  }
  ctx.body = await History.setOne(user, is_correct, exists, syllables)
}
