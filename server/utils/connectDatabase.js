const MongoClient = require("mongodb").MongoClient;

const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async (collectionName) => {
  const databaseLink = process.env.DATABASE_LINK;
  let client;
  let db;
  let dbCollection;

  try {
    client = await MongoClient.connect(databaseLink);
    db = client.db();
    dbCollection = db.collection(collectionName);
  } catch (e) {
    console.error(e.message || "Could not connect to database!");
  }

  return { client, dbCollection, db };
};

module.exports = connectDatabase;
