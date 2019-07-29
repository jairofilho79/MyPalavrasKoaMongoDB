const mongo = require('mongodb')
const { funcWithConnect } = require('../../common/db')
const get = require('./getOne')
const getById = require('./getOneById')
const setS = require('../Syllable/setOne')

module.exports = async (word, syllables) => {
  const storaged = await get(word)

  if(storaged === null) {
    let dic_storaged_syllables = {}
    let storaged_syllables = []
    for(syllable of syllables) {
      if(dic_storaged_syllables.hasOwnProperty(syllable)) {
        storaged_syllables.push(dic_storaged_syllables[syllable])
        continue
      }
      const storaged_syllable = await setS(syllable)
      dic_storaged_syllables[syllable] = new mongo.ObjectID(storaged_syllable._id)
      storaged_syllables.push(dic_storaged_syllables[syllable])
    }

    const response = await funcWithConnect('insertOne', ['Word', {name: word, syllables: storaged_syllables}])

    return await getById(response._id)
  }
  return storaged
}
