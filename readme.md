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

# Find data :

| functions    | Find Type `db.collection.find()`          |                                                     | Example                                          |
| ------------ | ----------------------------------------- | --------------------------------------------------- | ------------------------------------------------ |
| find()       | `collection.find()`                       | show all document                                   |                                                  |
| find()       | `collection.find(queryObject)`            | to find all data from collection                    | `db.collection.find({age: 20})`                  |
| limit()      | `collection.find(queryObject).limit(20)`  | gives on limited data                               | `db.collection.find({age: 20}).limit(10)`        |
| count()      | `collection.find().count()`               | return `document` length                            | `db.collection.find({age: 20}).limit(10)`        |
| skip()       | `collection.find().skip(number)`          | `skip(number)` help to skip some documents          | `db.collection.find().skip(10 * page).limit(10)` |
| sort()       | `collection.find().sort({key: -1})`       | we can sort data . `key` value will be `1` or `-1`. | `db.collection.find().sort({age: 1, name: -1})`  |
| projection() | `collection.find().projection({key: -1})` | we can sort data . `key` value will be `1` or `-1`. | `db.collection.find().sort({age: 1, name: -1})`  |

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



