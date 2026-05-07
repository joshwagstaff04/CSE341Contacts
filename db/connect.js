const { MongoClient } = require('mongodb');

let db;

const connectDb = async (callback) => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db('contacts');
  callback();
};

const getDb = () => db;

module.exports = { connectDb, getDb };
