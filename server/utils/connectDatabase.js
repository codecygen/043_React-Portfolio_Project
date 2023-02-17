const MongoClient = require("mongodb").MongoClient;

const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async (collectionName) => {
  const databaseLink = process.env.DATABASE_LINK;

  const client = await MongoClient.connect(databaseLink);
  const db = client.db();
  const dbCollection = db.collection(collectionName);

  return { client, dbCollection };
};

module.exports = connectDatabase;
