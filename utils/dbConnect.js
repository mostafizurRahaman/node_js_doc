const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
   "mongodb+srv://<username>:<password>@cluster0.4nkvsmn.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});
let dbConnection;

const connectToServer = function (callback) {
   client.connect((err, db) => {
      if (err) {
         return callback(err);
      }

      dbConnection = db.db("demo4");
      console.log("Successfully connect to mongodb");

      return callback();
   });
};

const getDb = () => {
   return dbConnection;
};

module.exports = { connectToServer, getDb };
