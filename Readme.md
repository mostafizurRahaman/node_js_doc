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
-  Create a Model

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

# Create a Model :

-  Model name will be start with capital letter.
-  `mongoose.model("ModelName", SchemaName)` by using this function we can
   create a model:
-  Example:
   ```js
   const Product = mongoose.model("Product", ProductSchema);
   ```

# Post operation with Mongoose:

-  we can `post ` to ways in mongoose : `save()` or `create()` method:
-  ## `save()`: we use save method when we need modified data in server.

   -  create an `instance` from your `model` with `new` keyword.
      ```js
      const proudct = new Product(dataObject);
      const product = new Product(req.body);
      ```
   -  then use `instanceName.save() method` . It works asynchronously. so we use
      `async await`
   -  After saving data on database `save()` returns the same data.
   -  Example:

   ```js
   //  model :
   const Product = mongoose.model("Product", ProductSchema);
   app.post("/api/v1/product", async (req, res, next) => {
      try {
         const product = new Product(req.body);
         const results = await product.save();
         console.log(req.body);
         res.status(200).send({
            success: true,
            message: "Product saved successfully",
            data: results,
         });
      } catch (err) {
         res.status(400).send({
            success: false,
            name: err.name,
            messsage: err.message,
         });
      }
   });

   module.exports = app;
   ```

-  ## `Create()`: if you don't need to modify data use `create()`.
   -  `ModelName.create(dataObject)` : create a documents on database and
      returns same data to us.
   -  It's aloso asynchronously so we can use `async await` and `try & catch`
   -  Example :
   ```js
   app.post("/api/v1/product", async (req, res, next) => {
      try {
         const results = await Product.create(req.body);
         res.status(200).send({
            success: true,
            message: "product save successfully",
            data: results,
         });
      } catch (err) {
         res.status(400).send({
            success: false,
            message: err.message,
            name: err.name,
         });
      }
   });
   ```

# Schema Midllewares:

-  ## For save:

   -  ### `SchemaName.pre('save', callback(next)) ` it work before saved data on database.

      -  the callback function will be start with: `function` keyword. arrow
         function not allow as parameter
      -  callback function have paramete `next` to call the next `middleware`.
      -  we need to access `this` here.
      -  `this` represent data that we send from client side.
      -  Example:

      ```js
      productSchema.pre("save", function (next) {
         if (this.quantity === 0) {
            this.status = "out-of-stock";
         }
      });
      ```

   -  ### `SchemaName.post('save', callback(doc, next)) ` it work before saved data on database.

      -  the callback function will be start with: `function` keyword. arrow
         function not allow as parameter
      -  `doc` parameter represent the documents. a
      -  `next` function used to call the next `middleware.`

      -  Example:

      ```js
      ProductSchema.post("save", function (doc, next) {
         console.log("product saved for ", doc._id);
         next();
      });
      ```

# Instence Method of Schema:

-  #### `SchemaName.methods.newMethodName = function(){}` We can add any method on
   schema by using the function.
   -  Example:
      ```js
      ProductSchema.methods.logger = function () {
         console.log(`Data saved for ${this.name}`);
      };
      ```
-  #### we can access the function on our `model instance` after save.
   -  Example:
   ```js
   app.post("/api/v1/product", async (req, res, next) => {
      try {
         const product = new Product(req.body);
         // if (product.quantity === 0) {
         //    product.status = "out-of-stock";
         // }
         const results = await product.save();
         results.logger();
         res.status(200).send({
            success: true,
            message: "Product saved successfully",
            data: results,
         });
      } catch (err) {
         res.status(400).send({
            success: false,
            name: err.name,
            messsage: err.message,
         });
      }
   });
   ```
