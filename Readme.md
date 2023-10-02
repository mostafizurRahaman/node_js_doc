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

# Get Data With Mongoose:

-  #### `ModelName.find(queryObject)`:

   ```js
   app.get("/api/v1/product", async (req, res, next) => {
      try {
         const product = await Product.find({
            _id: "650fd64b85321f25787eb2f4",
         });

         res.status(200).send({
            status: "success",
            message: "Data found successfully",
            data: product,
         });
      } catch (err) {
         res.status(400).send({
            status: "failed",
            message: err.message,
            name: err.name,
         });
      }
   });
   ```

-  #### `ModelName.findById("ObjectIdSring")`:

   ```js
   app.get("/api/v1/product", async (req, res, next) => {
      try {
         const product = await Product.findById("650fd64b85321f25787eb2f4");

         res.status(200).send({
            status: "success",
            message: "Data found successfully",
            data: product,
         });
      } catch (err) {
         res.status(400).send({
            status: "failed",
            message: err.message,
            name: err.name,
         });
      }
   });

   module.exports = app;
   ```

-  #### `ModelName.findOne(filterObject, options)`:

   ```js
   app.get("/api/v1/product", async (req, res, next) => {
      try {
         const product = await Product.findOne({ name: { isexi } });

         res.status(200).send({
            status: "success",
            message: "Data found successfully",
            data: product,
         });
      } catch (err) {
         res.status(400).send({
            status: "failed",
            message: err.message,
            name: err.name,
         });
      }
   });

   module.exports = app;
   ```

# Query in Mongoose:

-  #### Query like mongoDB :
   -  Example:
      ```js
      const product = await Product.find({ price: { $lt: 100 } })
         .skip(2)
         .limit(3)
         .sort({ price: -1 });
      ```
-  #### `Query Chaining with where(propertyname)`:
   -  Example :
      ```js
      const product = await Product.where("quantity")
         .gte(100)
         .lt(3000)
         .where("name")
         .regex(/ch/)
         .where("price")
         .gt(0);
      ```
-  #### Projection in Mongoose:
   -  we can do `projection ` two ways in `mongoose`.
   -  ##### In `find({}, "propertyName -propertyNmae")` or
      `findOne({}, "propertyName -propertyNmae")` or
      `findById({}, "propertyName -propertyNmae")`
      -  Example:
      ```js
      const product = await Product.find(
         { price: { $lt: 100 } },
         "-name -quantity"
      );
      ```
   -  ##### `select({propertyName: -1, propertyName: 1})` :
      -Example:
      ```js
      const product = await Product.find({ price: { $lt: 100 } })
         .select({ quantity: 0 })
         .skip(2)
         .limit(3)
         .sort({ price: -1 });
      ```

# Update documents with Mongoose:-

-  ## `updateOne(queryObject, updatedDoc, [otions])`:

   -  By using update method we can upadate our any document properties.
   -  `Bydefault` `Model.udpateOne()` can't validate data.
   -  pass `{runsValidators: true}` as third parameter to use validation before
      update.
   -  Example:

      ```js
      module.exports.updateProductById = async (req, res, next) => {
         try {
            const { id } = req.params;
            const results = await productservices.updateProductServices(
               id,
               req.body
            );

            res.status(200).send({
               status: "success",
               message: "Data successfully udpated",
               data: results,
            });
         } catch (err) {
            res.status(400).send({
               success: "failed",
               message: err.message,
               name: err.name,
            });
         }
      };
      ```

   -  ## `save()` by using save method we can update data:

      -  `save()` method automatically validate data .
      -  At first `find the data by using` `Model.find(query)` or
         `Model.findByOne(query)` or `Model.findById("ID")` method.
      -  after find the data.
      -  just set `data.set(updatedData).save()`
      -  Example:

      ```js
      //  udpate by using save() method:
      module.exports.updateProductServices = async (id, data) => {
         const product = await Product.findOne({
            _id: "650fbdb2d8d38a26202ee293",
         });

         // set the data with product.set(newData)
         //  and save()

         const results = await product.set(data).save();
         return results;
      };
      ```

   -  ## `findOneAndUpdate()` and `findByIdAndUpdate()` : works like `updateOne()`

# Bulk Udpate in Mongoose :

-  ## `updateMany(filters, udpatedDoc, [options]}`

   -  `filters` contains a properties array. or array of ids.
   -  Example:

   ```js
   module.exports.bulkUdpateProductService = async (data) => {
      console.log(data);
      const products = await Product.updateMany(
         { _id: data.ids },
         { $set: data.data },
         {
            runValidators: true,
         }
      );
      return products;
   };
   ```

-  ## `Promise.all()` and `UpdateOne() ` combination for bulk update:

   -  Access array of data which need to udpate from `req.body`.
   -  `req.body` contains `_ids` and `updatedData`
   -  then create an empty array.

   ```js
   const data = req.body;
   const allPromises = [];
   ```

   -  Then apply for loop on `array of data` which we find from `req.body`.
   -  for every `_id` update data by using
      `updateOne({_id: i.id}, {$set: data.updatedData}, {runRevalidators: true})`
      and push the promise to `allPromise` Array.
   -  Atlast `resolve` the array of promises by using `Promise.all([])`.
   -  it's return an array of values after updation.
   -  Example :

   ```js
   module.exports.bulkUdpateProductService = async (data) => {
      console.log(data);
      const products = [];
      data.forEach((i) => {
         products.push(
            Product.updateOne({ _id: i._id }, { $set: { price: i.info.price } })
         );
      });

      const results = await Promise.all(products);
      return results;
   };
   ```

# Delete Single Product: by using `deleteOne()`

-  `modelName.deleteOne({_id: ids})`
-  Example:

```js
module.exports.deleteProductServiceById = async (productId) => {
   const results = await Product.deleteOne({ _id: productId });
   return results;
};
```

# Bulk Delete Product: by using `model.deleteMany({_id: arrayofIds})`

# Advance Filtering in Mongoonse :

-  Atfirst pass everying in api url from clientside: like below:
-  `http://localhost:5000?name=chal&price=48&sort=price,quantity&fields=name,price,quantity,description&limit=5&page=1`

   -  ## Seperate filter to find documents :

      -  At first copy the `req.query` and store `filter` variable.

      ```js
      const filter = { ...req.query };
      ```

      -  We need to remove some fields from filter. like `sort` ,` fileds`,
         `limit`, `page` etc.
      -  Because `sort` ,` fileds`, `limit`,`page` are not use with filter
         option.
      -  declare an `array` and `store` the fileds which need to remove.

      ```js
      const excludedFields = ["sort", "fields", "limit", "page"];
      ```

      -  then apply a `forEach` `loop` on `excludedFields` and delete properties
         from `filter`;

      ```js
      excludedFields.forEach((field) => delete filter[field]);
      ```

      -  the pass the `filter` on find method:

      ```js
      module.exports.getProductService = async (filter) => {
         const product = await Product.find(filter);
         return product;
      };
      ```

-  ## Seperate `sort` and `projection` object for flexibility:

   -  create `const queryObject = {}`
   -  first check `sort` is exits ?
   -  if exits `split` `req.query.sort` by `comma (,)` and `join(" ")` with
      empty space and stor into `queryObject.sortBy`

   -  Example:

   ```js
   const queryObject = {};
   if (req.query.sort) {
      queryObject.sortBy = req.query.sort.split(",").join();
   }
   ```

   -  then check `fields`, if exits ,`split(",")` `req.query.sort` by `comma(,)`
      and `join(" ")` with empty space and store into `queryObject.selectionBy`

   -  then `pass` the `queryObject` as parameter of
      `model.find().sort(queryObject.sortBy).select(queryObject.selectionBy)`
   -  Controller Part:

   ```js
   module.exports.getProducts = async (req, res, next) => {
      try {
         const query = req.query;
         const filter = { ...query };

         const queryObject = {};
         const excludedFields = ["sort", "limit", "page", "fields"];
         excludedFields.forEach((field) => delete filter[field]);

         if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queryObject.sortBy = sortBy;
         }

         if (req.query.fields) {
            const selectionBy = req.query.fields.split(",").join(" ");
            queryObject.selectionBy = selectionBy;
         }

         const product = await productservices.getProductService(
            filter,
            queryObject
         );
         res.status(200).send({
            status: "success",
            message: "Data found successfully",
            data: product,
         });
      } catch (err) {
         res.status(400).send({
            status: "failed",
            message: err.message,
            name: err.name,
         });
      }
   };
   ```

   -  Services Part :

   ```js
   module.exports.getProductService = async (filter, queryObject) => {
      console.log(queryObject.sortBy);
      const product = await Product.find(filter)
         .sort(queryObject.sortBy)
         .select(queryObject.selectionBy);
      return product;
   };
   ```

   -  ## Advance Filtering with Operator :

      -  After queryName and before = use `[operator]` in baracket from client
         side ap query: like: `http:localost:5000?price[gt]=100`
      -  In backend : we can access the query with `req.query`;
      -  the results look like `{price : {gt: 100}}`
      -  But before `operatorName` we need to add `$` sign.
      -  So we can copy the `req.query ` to `filter`

         ```js
         const filter = { ...req.query };
         ```

      -  convert the filter to String by JSON.strigify(filter) and store a
         variable.

      -  the use replace method of string. if any operator found replace the
         operator with $operator.
      -  use the this regex :

      ```regex
         /\b(gt|gte|lt|lte|eq|ne)\b/g
      ```

      -  the `replace(regex, callback(match))` mathod get a `callback function `
      -  so if any operator match with can return the operator with `$operator`

      ```js
      filterStrigify.replace(
         /\b(gt|lt|gte|lte|eq|ne)\b/g,
         (match) => `$${match}`
      );
      ```

      -  Example :

      ```js
      module.exports.getProducts = async (req, res, next) => {
         try {
            const query = req.query;
            let filter = { ...query };

            const queryObject = {};
            const excludedFields = ["sort", "limit", "page", "fields"];
            excludedFields.forEach((field) => delete filter[field]);
            const filterStrigify = JSON.stringify(filter);
            filter = JSON.parse(
               filterStrigify.replace(
                  /\b(gt|lt|gte|lte|eq|ne)\b/g,
                  (match) => `$${match}`
               )
            );

            console.log(filter);
            if (req.query.sort) {
               const sortBy = req.query.sort.split(",").join(" ");
               queryObject.sortBy = sortBy;
            }

            if (req.query.fields) {
               const selectionBy = req.query.fields.split(",").join(" ");
               queryObject.selectionBy = selectionBy;
            }

            const product = await productservices.getProductService(
               filter,
               queryObject
            );
            res.status(200).send({
               status: "success",
               message: "Data found successfully",
               data: product,
            });
         } catch (err) {
            res.status(400).send({
               status: "failed",
               message: err.message,
               name: err.name,
            });
         }
      };
      ```

# Pagination in Mongoose :

-  ##### pass `limit` and `page` on query from client side :

   ```js
      http://localhost:5000?page=1&limit=5
   ```

-  ##### In Backend Controller function :

   -  check in `req.query` `page` exist ?
   -  if exist distructure the `page` and `limit` from `req.query`;
   -  set a default value for `page` and `limit` property. if page or limit
      don't exist on client side . the default value will applicable.

   ```js
   if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
   }
   ```

   -  then calculate, how many data need to `skip` :
      `skip = (page -1) * (limit *1)`
   -  -  Add limit and skip to `queryObject`. `queryObject.skip = skip` &
         `queryObject.limit = limit`

   ```js
   - And convert the limit to string to number
   if (req.query.page) {
      let { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * (limit * 1);
      limit = parseInt(limit);
      queryObject.skip = skip;
      queryObject.limit= limit;
   }
   ```

   -  Then pass the queryObject to `service part function`

   ```js
   module.exports.getProducts = async (req, res, next) => {
      try {
         const query = req.query;
         const filter = { ...query };
         const queryObject = {};
         const excludedFields = ["limit", "page", "sort"];

         excludedFields.forEach((field) => delete filter[field]);

         if (req.query.page) {
            let { page = 1, limit = 3 } = req.query;
            const skip = (page - 1) * (limit * 1);
            limit = parseInt(limit);
            queryObject.skip = skip;
            queryObject.limit = limit;
         }

         const products = await getProductService(filter, queryObject);
         res.status(200).send({
            status: "success",
            message: "Data Found Successfully",
            data: products,
         });
      } catch (err) {
         res.status(400).send({
            status: "failed",
            message: err.message,
            name: err.name,
         });
      }
   };
   ```

-  ##### Services Part function :

   -  Access the `queyObject` from parameter.
   -  then apply queryObject on `skip(queryObject.skip)` and
      `skip(queryObject.limit)` method `after find documents`
   -  Example :

   ```js
   module.exports.getProductService = async (filter, queryObject) => {
      console.log(queryObject.sortBy);
      const product = await Product.find(filter)
         .sort(queryObject.sortBy)
         .select(queryObject.selectionBy);
      return product;
   };
   ```

# Populate In mongoose :

-  Suppose we have two collection products and brands. Every brand have some
   products. Every product contain brand id and every brand contain it's product
   id.
-  So When we post the `product` we need to `update` the` brand collection`
   also. We can push the `productId` to `brand.products` property
-  Example Product Post:

```js
module.exports.saveProductService = async (data) => {
   const product = new Product(data);
   const results = await product.save();
   // results.logger();
   //  get product id and brand details:
   const { _id: productId, brand } = results;
   // update brand product:
   const brandProduct = await Brand.updateOne(
      { _id: brand.id },
      { $push: { products: productId } },
      {
         runValidators: true,
      }
   );

   if (brandProduct.nModified) {
      return results;
   }
};
```

-  Then go the `brand` route and `populate` the `products` property by using
   `.populate('products') `

# File Upload By Using multer:

-  #### Simple upload with multer:

   -  create a `uploader` from `multer` and `export` it. `uploader` is an
      `middleware`.

   ```js
   //  require multer :
   const multer = require("multer");

   //  create uploader middleware:  dest means destination location
   const uploader = multer({ dest: "images/" });

   //  export uploader
   module.exports = uploader;
   ```

   -  create an api route to upload file :
   -  pass the `uploader middleware ` before `controller function` :

   ```js
   router.post(
      "/file-upload",
      uploader.single("image"),
      productController.fileUpload
   );
   ```

   -  create a controller function to send response :

   ```js
   module.exports.fileUpload = async (req, res, next) => {
      try {
         res.status(200).send(req.file);
      } catch (err) {
         res.status(400).send({
            status: "failed",
            message: err.message,
            name: err.name,
         });
      }
   };
   ```

-  #### Image upload with filename and extension :

   -  Add some configuration on `uploader` : like `storage`, `fileFilter`,
      `limits`
   -  ###### `storage` create a storage and `and pass as property`.

      -  to create storage call the
         `multer.diskStorage({ destination: 'pathname/', filename: (req,file,cb) => {}})`
      -  Example:

      ```js
      const storage = multer.diskStorage({
         destination: "images/",
         filename: (req, file, cb) => {
            const uniqueSuffix =
               Date.now() + "-" + Math.round(Math.random() * 1e9);
            const fileName = uniqueSuffix + "_" + file.originalname;
            cb(null, fileName);
         },
      });
      ```

   -  ###### `total code ` Example:

   ```js
   //  require multer :
   const multer = require("multer");
   const path = require("path");

   /* //  create uploader middleware:  dest means destination location
        const uploader = multer({ dest: "images/" });
        */

   const storage = multer.diskStorage({
      destination: "images/",
      filename: (req, file, cb) => {
         const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
         const fileName = uniqueSuffix + "_" + file.originalname;
         cb(null, fileName);
      },
   });

   const uploader = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
         const supported = /png|jpg|jpeg/;
         const extension = path.extname(file.originalname);
         if (supported.test(extension)) {
            cb(null, true);
         } else {
            cb(new Error("File extension not matched"));
         }
      },
      limits: {
         fileSize: 50000000,
      },
   });

   //  export uploader
   module.exports = uploader;
   ```
