# What is Mongoose ?

-  Elegant MongoDB Object Modeling For node JS .
-  Mongoose is an ODM -> (Document Object Modeling) for MongoDB.

# Connect Mongoose with MongoDB:

-  require `mongoose` from `'mongoose'` .
-  ## `mongoose.connect(process.env.monogo_DB_Uri)` :
   -  `mongoose.connect(mongo_DB_URI)` return a an `promise()`
   -  by using `then` we can handled the `promise()`
   -  Example:
   ```js
   //  database connection with mongoose :
   mongoose.connect(process.env.DATABASE).then(() => {
      console.log(`Database Connected Successfully`.red.bold);
   });
   ```

# Database Design Steps:-

-  Schema Design :

# Scheme Design :

-  require `mongoose` with default import. use `mongoose.Schema()`
-  Named require `{Schema}` from `mongoose`
-  Every `Schema` has a name . so we can create a `Product Schema`:

```js
const ProductSchema = mongoose.Schema({});
```

-  Every Schema has some property and we need to declare types and validation
   for Schema :

# Validation Rules :

-  ## We can directly add property type ` propertyName: propertyType`
   ```js
   const ProductSchema = mongoose.Schema({
      name: String,
   });
   ```
-  ## But for more validation we can pass a object for declare type and validation:
   ```js
   const ProductSchema = mongoose.Schema({
      name: {
         type: String,
         required: true,
         trim: true,
         unique: true,
         minLength: 3,
         maxLength: 100,
      },
   });
   ```
-  ## Custom Error for every property:

   -  By defining array we can pass
      `propertyName: [value, 'Message if value not matched or found']`
      ```js
      const ProductSchema = mongoose.Schema({
         name: {
            type: String,
            required: [true, "Please must give na name for every product"],
            unique: [true, "Every product name will be unique"],
            minLength: [3, "Every Product name has minimun 3 digits"],
            maxLength: [100, "Every product name will be max 100 digits"],
         },
      });
      ```

   ```

   ```

-  ## Reference Other Schema :

   -  to Create a Reference need to define `type` and `ref`.
   -  `type` value will be `mongoose.Schema.Types.ObjectId`
   -  `ref`value will be an `Model Name ` :
   -  Example Below:
      ```js
       supplier: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Supplier",
         },
      ```

-  ## Embed Other Schema :

   -  For Emmeding Other Schema we can use `_id` property :
   -  `_id` properties value will be `mongoose.Schema.Types.ObjectId`
   -  Example:

   ```js
    categories: [
         {
            name: {
               type: String,
               required: true,
            },
            _id: mongoose.Schema.Types.ObjectId,
         },
      ],


   ```

# Schema Object Fisrt Parameter Properties :

| Properties Name | Why use                                                                                                                                                                                     | What is the value                                                             | Validation | Example                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| `type`          | to define type of property                                                                                                                                                                  | `String`, `Number`,`Boolean`,                                                 |            | `type: string`                                                                                              |
| `required`      | users must gives the value                                                                                                                                                                  | `true` or `false`                                                             |            | `required: true`                                                                                            |
| `default`       | to set a default value.                                                                                                                                                                     | any value                                                                     |            | `default: Date.now`                                                                                         |
| `trim`          | unnessary space remove of string                                                                                                                                                            | `true` or `false`                                                             |            | `trim: true `                                                                                               |
| `unique`        | the property value should be unique                                                                                                                                                         | `true` or `false`                                                             |            | `unique: true`                                                                                              |
| `min`           | `min` number                                                                                                                                                                                | `any number`                                                                  |            | ` min : 3`                                                                                                  |
| `max`           | `max` number                                                                                                                                                                                | `any number`                                                                  |            | ` max : 3`                                                                                                  |
| `minLength`     | `minLength` for string                                                                                                                                                                      | `any number`                                                                  |            | ` minLength : 3`                                                                                            |
| `maxLength`     | `maxLength` for string                                                                                                                                                                      | `any number`                                                                  |            | ` maxLength : 3`                                                                                            |
| `maxLength`     | `maxLength` for string                                                                                                                                                                      | `any number`                                                                  |            | ` maxLength : 3`                                                                                            |
| `enum`          | `enum` used for pre difine value                                                                                                                                                            | 1. `Enumbs value will an array of items ` </br>. `{ values: [], message: ""}` |            | ` enum: { values: ["kg", "litre", "pcs"],mesasge: "uint couldn't be {VALUE}, uint will be kg/litre/pcs" },` |
| `validate`      | validator property contains a validator funnction. Validator function have a value parameter. value parameter gives us the value. and we can validate the value.and return `true` or false. | `validator : (value)=> {} `                                                   |            | `validate: {validator: (value) => return true}`                                                             |

# Schema Object Second Parameter Properties Contains some options:

| Properties Name | Why use                                          | What is the value | Validation | Example            |
| --------------- | ------------------------------------------------ | ----------------- | ---------- | ------------------ |
| `timestamps`    | by default gettings the created and updatedTimes | `true` or `false` |            | `timestamps: true` |
| `_id`           | give \_id property or not                        | `true` or `false` |            | `_id: true`        |
