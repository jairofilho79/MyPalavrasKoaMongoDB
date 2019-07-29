const User = require('../controller/User')
const Syllable = require('../controller/Syllable')
const Word = require('../controller/Word')
const History = require('../controller/History')

module.exports =  (router) => {

  //User Routes
  router.get('/users', User.getAll)
  router.get('/user/:name', User.getOne)
  router.get('/user/id/:id', User.getOneById)
  router.post('/user', User.setOne)

  //Syllable Routes
  router.get('/syllables', Syllable.getAll)
  router.get('/syllable/:name', Syllable.getOne)
  router.get('/syllable/id/:id', Syllable.getOneById)
  router.post('/syllable', Syllable.setOne)

  //Word Routes
  router.get('/words', Word.getAll)
  router.get('/words/:limit', Word.getMany)
  router.get('/word/:name', Word.getOne)
  router.get('/word/id/:id', Word.getOneById)
  router.post('/word', Word.setOne)

  //History
  router.get('/histories', History.getAll)
  router.get('/history/:user', History.getOne)
  router.post('/history', History.setOne)
}
