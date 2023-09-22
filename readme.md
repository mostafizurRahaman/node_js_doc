# What is mongodb ?

-  MongoDb is a document oriented NoSQL database for high volume data storage.
-  MongoDB stores data in BSON format.
-  Large amounts of diverse data.
-  Complex data structures.

# Mongo DB Installation:

-  Download MongoDB and install it. '
-  Mongo Compass automatically install with MongoDB.
-  Then Download MongoDB Shell and Store the shell on your computer driver.
-  I store my mongoDB shell on G: drive:
-  Then path is :

```js
      G:\mongosh-1.10.6-win32-x64\bin
```

-  Copy the path of shell bin folder :
-  And set on system environment variable
-  Then run a command `mongosh` command on `cmd`.

```js
mongosh;
```

# Mongo Compass Command or Mongo DB Shell:

| command                          | work                                      |
| -------------------------------- | ----------------------------------------- |
| `show dbs`                       | show databases                            |
| `show collections`               | show collections                          |
| `use databasename`               | create database                           |
| `db.collectionname.insertOne()`  | insert one document on collection         |
| `db.collectionname.insertMany()` | insert an array of document on collection |
| `db.collectionname.updateOne()`  | insert an array of document on collection |
| `db.collectionname.updateMany()` | insert an array of document on collection |

# Find data :

| functions    | Find Type `db.collection.find()`          |                                                     | Example                                             |
| ------------ | ----------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| find()       | `collection.find()`                       | show all document                                   |                                                     |
| find()       | `collection.find(queryObject)`            | to find all data from collection                    | `db.collection.find({age: 20})`                     |
| limit()      | `collection.find(queryObject).limit(20)`  | gives on limited data                               | `db.collection.find({age: 20}).limit(10)`           |
| count()      | `collection.find().count()`               | return `document` length                            | `db.collection.find({age: 20}).limit(10)`           |
| skip()       | `collection.find().skip(number)`          | `skip(number)` help to skip some documents          | `db.collection.find().skip(10 * page).limit(10)`    |
| sort()       | `collection.find().sort({key: -1})`       | we can sort data . `key` value will be `1` or `-1`. | `db.collection.find().sort({age: 1, name: -1})`     |
| projection() | `collection.find().projection({key: -1})` | we can sort data . `key` value will be `1` or `-1`. | `db.collection.find().projection({age: 1, _id: 0})` |

# Operator :

-  every operator start with `$` sign :
-  ## Comparision Operator:

   | operator | description                                                                           | example                                                             |
   | -------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
   | `$gt`    | greater then                                                                          | `db.users.find({age: {$gt: 20}})`                                   |
   | `$lt`    | less then                                                                             | `db.users.find({age: {$lt: 20}})`                                   |
   | `$gte`   | greater then or equal                                                                 | `db.users.find({age: {$gte: 20}})`                                  |
   | `$lte`   | less then or equal                                                                    | `db.users.find({age: {$lte: 20}})`                                  |
   | `$eq`    | equal operator                                                                        | `db.users.find({age: {$eq: 10}}) `                                  |
   | `$in`    | $in : operator accept an [], return element which match with array element            | `db.users.find({name: {$in: ['Tamim hossain',"jihad hossain"]}}) `  |
   | `$nin`   | $nin : operator accept an [], return element which doesn't match with array's element | `db.users.find({name: {$nin: ['Tamim hossain',"jihad hossain"]}}) ` |

-  ## Logical Operator:

   | operator | syntax                       | description                                                                                                                         | example                                                 |
   | -------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
   | `$and`   | `{$and : [contion,contion]}` | `$and` operator contain a array of contidion . every condition will be object. it return data which matach with every conditions    | `db.users.find({ $and: [ {name: 'M'}, {age: 20}]})`     |
   | `$or`    | `{$or : [contion,contion]}`  | `$and` operator contain a array of contidion . every condition will be object. it return data which matached with any one condition | `db.users.find({$or: [{name: 'M'}, {age: {$lt: 10}}]})` |
   | `$not`   | `{$or : [contion,contion]}`  | `$and` operator contain a array of contidion . every condition will be object. it return data which matached with any one condition | `db.users.find({$or: [{name: 'M'}, {age: {$lt: 10}}]})` |

-  ## Others Operator:

   | operator | syntax                                     | description                                                                             | example                                                 |
   | -------- | ------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
   | `$exits` | `{property: {$exits: true}}`               | check a property isExists or not isExists and return data                               | `db.users.find({age: {$exists: true}}) `                |
   | `$type`  | `{property : {$type: "datatype"}}`         | `$type` operator check data type. if data type matched of that return the matched data. | `db.users.find({age: {$type: 'number'}}) `              |
   | `$regex` | `{property : {$regex: regex}}`             | if any data matched with regex return                                                   | `db.users.find({age: {$regex: /M/}}) `                  |
   | `$expr`  | `{$expr: {$gt: ["$spend", "$haveMoney"]}}` | matched expression value will be return                                                 | `db.users.find({$expr: {$lt: ["spend", "haveMoney"]}})` |

-  ## Update Operator : we can also use comperrsion and logical operator for query in updation or deletion.

   | operator   | syntax                               | description                                                                                                      | example                                                                                                          |
   | ---------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
   | `$set`     | `{ $set: { age: 21}}`                | `$set` operator helps to update `object.properties`                                                              | `db.users.updateOne({name: "M"}, {$set: {name: "Mostafiuzr rahaman"}}); `                                        |
   | `$unset`   | `{ $unset: { age: 21}}`              | `$unset` operator remove document properties.                                                                    | `db.users.updateOne({name: "M"}, {$unset: {age: ""}}); `                                                         |
   | `$inc`     | `{$inc: {age: 2}}`                   | `$inc` increment operator items when the query matched. By providing (-) `minus` vale we can decrement any value | `db.users.updateOne({age: {$lt: 10}}, {$inc: {age: 2}}); `                                                       |
   | `$push`    | `{$push : {property: value}`         | `$push` push an element on array of any document.                                                                | `db.users.updateMany({age: {$gt: 5}}, {$push: {"skills": "JavaScript"}}) `                                       |
   | `$each`    | `{$push : { property: {$each: []}}}` | `$each` get array as value. `$each` operator helps us to push multiple items with `$push` in to array            | `db.users.updateMany({name: {$exists: true}}, {$push: { skills: {$each: ["React JS", "Next JS", "Node JS"]}}}) ` |
   | `$pull`    | `{$pull : {property: value}`         | `$pull` removes an item from array                                                                               | `db.users.updateMany({age: {$gt: 5}}, {$pull: {"skills": "React"}})`                                             |
   | `$pullAll` | `{$pullAll : {property: value}`      | `$pullAll` removes or delete multiple items from array                                                           | `db.users.updateMany({name : {$exists: true}}, {$pullAll: {skills: ["React JS", "Next JS", "Node JS"]}})         |

# Connect MongoDB with Express JS or Node JS:

-  go to mongo db documentation and copy the code :

```js
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
```

# MongoDB Driver Operation with Express Js :

-  #### Get Request topics :

   -  ##### Normal Get Operation :

      -  `cursor` : Find the the from collection by using query it's called
         `cursor` :
         ```js
         const db = getDb();
         //  cursor :
         const cursor = db.collection("tools").find();
         ```
      -  we need to convert cursor to array:
      -  Mongo driver have two function to `toArray()` or `forEach()` convert
         `cursor` to `array of data`:

         ```js
         module.exports.getProducts = async (req, res, next) => {
            try {
               const db = getDb();
               //  cursor :
               const cursor = db.collection("tools").find();
               // we can find element by using toArray() or forEach():
               const tools = await cursor.toArray();
               res.status(200).send({
                  success: true,
                  message: "success",
                  data: tools,
               });
            } catch (err) {
               next(err);
            }
         };
         ```

   -  ##### projection with `find().project({propertyName: 0, propertyName: 1})` or `find({}, {projection: {propertyName: 0, propertyName: 1}})`:

      -  we can get specific properties from database by using `projection` or
         `project`.
      -  We can do `projection` two ways. by using `project()` or `projection`.
      -  0: means don't get the property
      -  1: means get the property
      -  ###### `project()`: project({propertyName: 1, propertyName: 0}) use after find() like `find().project({name: 0})`
         ```js
         const cursor = db
            .collection("tools")
            .find()
            .project({ name: 1, _id: 0 });
         ```
      -  ###### `projection: {propertyName: 1, propertyname: 0}` : `projection` will be second parameter of `find({}, {projection: {name: 1, _id: 0}})`

         ```js
         const cursor = db
            .collection("tools")
            .find({}, { projection: { name: 1, _id: 0 } });
         ```

   -  ##### pagination: by using `skip()` and `limit()`
      -  `skip()` and `limit()` method need to use after `find()`;
      -  `skip()` method `skip()` some number of items.
      -  `limit()` method only return fixed number of items.
      -  `find().skip(page * limit).limit()` this format used for pagition in
         Express js:
         ```js
         module.exports.getProducts = async (req, res, next) => {
            try {
               const db = getDb();
               const { limit, page } = req.query;
               //  cursor :
               // const cursor = db
               //    .collection("tools")
               //    .find({}, { projection: { name: 1, _id: 0 } });
               const cursor = db
                  .collection("tools")
                  .find({})
                  .skip(+page * limit)
                  .limit(+limit);
               // we can find element by using toArray() or forEach():
               const tools = await cursor.toArray();
               res.status(200).send({
                  success: true,
                  message: "success",
                  data: tools,
               });
            } catch (err) {
               next(err);
            }
         };
         ```

-  # `ObjectId()` Validation with `ObjectId.isValid(id)`:

   -  we can validate `_id` is `ObjectId` or `Not` by using .
      ```js
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
         return res
            .status(401)
            .send({ success: false, message: "enter a valid id" });
      }
      ```
   -  Example:

   ```js
   module.exports.getProductsById = async (req, res, next) => {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
         return res
            .status(400)
            .send({ success: false, message: "enter a valid id" });
      }
      try {
         const db = getDb();
         const result = await db
            .collection("tools")
            .findOne({ _id: new ObjectId(id) });
         res.send(result);
      } catch (err) {
         next(err);
      }
   };
   ```
