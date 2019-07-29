const mongo = require('mongodb')
const { funcWithConnect } = require('../../common/db')
const getOneById = require('./getOneById')
const getU = require('../User/getOneById')
const getS = require('../Syllable/getOneById')

module.exports = async (user, is_correct, exists, syllables) => {
  if(await getU(user) === null ) return
  if(typeof is_correct !== "boolean") return;
  if(isNaN(Number(exists)) || !isFinite(exists) || exists<0 || exists>2) return;
  let objIdSyllables = []
  for(syllable of syllables) {
    if(await getS(syllable) === null) {return;}
    objIdSyllables.push(new mongo.ObjectID(syllable))
  }
  // if(objIdSyllables.length !== syllables.length) return;
  const response = await funcWithConnect('insertOne',[
    'History',
    {
      user: new mongo.ObjectID(user),
      is_correct: is_correct,
      exists: Math.trunc(exists),
      syllables: objIdSyllables
    }
  ])

  return getOneById(response._id)
}
