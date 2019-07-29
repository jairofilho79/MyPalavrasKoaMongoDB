const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myPalavras';

const connect = MongoClient.connect

async function funcWithConnect(func, params) {
  try {
      const client = await connect(url, { useNewUrlParser: true })
      const db = client.db(dbName)
      try{
          return eval(func)(db, ...params)
      } catch(e) {
          console.error('Failed to execute ' + func)
          console.log(e)
      }
      client.close()
  }
  catch(e) {
      console.error('Failed to connect to DB')
      console.log(e)
  }
}

async function insertOne(db, collection, value) {
  await db.collection(collection).insertOne(value)
  return db.collection(collection).findOne(value)
}

async function insertMany(db, collection, values) {
  return db.collection(collection).insertMany(values)
}

async function find(db, collection, subject) {
  return db.collection(collection).find(subject).toArray()
}

async function findOne(db,collection,subject) {
  return db.collection(collection).findOne(subject)
}

async function aggregateRandomLimitLookup(db, collection, lkpOpt, limit) {
  return db.collection(collection).aggregate([ { $sample: { size: limit } }, { $lookup: lkpOpt } ], null).toArray()
}

async function lookup(db, collection, lkpOpt) {
  return db.collection(collection).aggregate([ { $lookup: lkpOpt } ], null).toArray()
}

async function aggregate(db, collection, Opt) {
  return db.collection(collection).aggregate(Opt, null).toArray()
}

async function lookupMatch(db, collection, lkpOpt, subject) {
  return db.collection(collection).aggregate([ { $match: subject }, { $lookup: lkpOpt } ], null).toArray()
}

module.exports = { funcWithConnect }
