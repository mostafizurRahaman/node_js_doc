const { MongoClient, ServerApiVersion } = require("mongodb");
const colors = require("colors");
const uri = process.env.ATLAS_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

let db;

const connectToServer = async (callback) => {
   try {
      dbConnection = await client.connect();
      db = dbConnection.db("tools");
      console.log(colors.green("database connected Successfully"));
      if (db) {
         callback();
      }
   } catch (e) {
      callback(err);
   }
};

const getDb = () => {
   return db;
};

module.exports = { connectToServer, getDb };
