# Portfolio App:

This app uses React on front end and NodeJS on backend. It also uses MongoDB. More instructions on running it in a development or production server is given in **043_React-Portfolio_Project_env** repo.

# Way to connect database in MongoDB Server without Mongoose

```javascript
// connectDatabase.js

const MongoClient = require("mongodb").MongoClient;

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

  return { client, dbCollection };
};

module.exports = connectDatabase;
```

Then call it in controller file

```javascript
// Connect to "bans" collection
const {
  client,
  dbCollection: blackListCollection,
  db,
} = await connectDatabase("blacklist");
```
