# :wave: What is express JS?

-  Express Js is a fast, Unopinionated, Minimalist web framework for node js .

# :wave: Why we use Express Js :

-  Unopininated - means full control
-  Fast
-  Free and open source
-  Easy
-  Popular

# :wave: MVC

-  MVC means `Media`, `View`, `Control`.

## :wave: Router Managment with :file_folder:`Route Folder`:-

-  ### :point_right: Create Routes:

   -  Create a :file_folder:`route` folder.
   -  Then create a :file_folder:`v1` folder.
   -  create a :page_with_curl: file with `filename.route.js` . here `route.js`
      It's a convention for routes.
   -  Require `express` from `express module` .

   ```js
   const express = require("express");
   ```

   -  Create a `router` by using `express.Router()` function.

   ```js
   const router = express.Router();
   ```

   -  then create api with
      `route.methodname(pathname, methodHanlerFunction(req,res)=> {})`

   ```js
   router.get("/", (req, res) => {
      res.send("products found");
   });

   router.post("/", (req, res) => {
      res.send("products posted ");
   });
   router.delete("/", (req, res) => {
      res.send("products deleted ");
   });
   router.put("/", (req, res) => {
      res.send("products put ");
   });
   router.patch("/", (req, res) => {
      res.send("products put ");
   });
   ```

   -  OR we all diclare api like below : `router.route(path)`

   ```js
   router
      .route("/")
      .get((req, res) => {
         res.send("products found ");
      })
      .post((req, res) => {
         res.send("products posted ");
      })
      .delete((req, res)=>{
         res.send("products deleted");
      })
      .
   ```

   -  Then export default the router.

   ```js
   module.exports = router;
   ```

   -  To use the route with `app` require the `router` with anyname from 'path'.
   -  And then call the `app.use("/api/v1/pathname/", router)`,

   ```js
   const productsRoutes = require("./route/v1/products.js");
   app.use("/api/v1/products/", productsRoutes);
   ```

   -  Then try to hit the api with browser or postman or any software.

## :point_right: create a :file_folder:`utils` :

-  :file_folder:`utils` folder contains all nessary configuration like database
   connection, mailSenderFunction etc.

## :point_right: Handler UnExits API:

-  Some we can't have any api. But users can try to hit any api which is not
   exits.
-  So we need to handle the api
-  call `app.all("*", (req, res)=> res.send("api not exits"))`

```js
app.all("*", (req, res) => {
   res.send("this api not exits");
});
```

# :wave: :file_folder:`Controler` Use Case:

-  :file_folder: `Controler` folder contains all `handlerFunction` of apies:
-  create a controller folder.
-  Eveny :page_with_curl:`file` name be `filename.control.js`. it's a
   convention.
-  Every :page_with_curl:` controller file` contains some function related with
   routes.
-  we just define a `function` in controller folder and `export` the function.
-  we also define multiple function in on controller file.
-  every `controller function` have `three parameter` : `req`, `res`, `next`.

```js
const getProducts = (req, res, next) => {
   res.send({ id: 1, name: "product1", id: 2, name: "product2" });
};
const saveProducts = (req, res, next) => {
   res.send({ id: 1, name: "product1", id: 2, name: "product2" });
};

module.exports = { getproducts, saveProducts };
```

-  then we `import` the file on `route` folder `file` to `pass` as
   `hanlderfunction`

```js
const express = require("express");
const {
   getProducts,
   saveProducts,
} = require("/controller/products.controller.js");

const router = express.Router();

router.get("/", getProducts);
router.post("/", saveProducts);
```

# :wave: Middleware :

-  An Express Application is an essentialy series of middleware functions calls.
-  ## :pointer_right: What is middleware :

   -  A middleware is a function.
   -  ##### :pointer_right: Middleware has access of three things
      -  request object(req)
      -  response object(res)
      -  the next middleware function. (next())
   -  ##### :pointer_right: A middleware function can do
      -  send response directly (সরাসরি রেসপন্স পাঠাতে পারে )
      -  after completing task call the next middleware on stack. (অথবা next()
         কে কল করে দিবে পরবর্তী middleware কে কাজ করার জন্য )
   -  ##### :pointer_right: Generally we store our middleware file in middleware folder.
      -  create a :file_folder:`middleware` on `root folder`.
      -  create a ":page_with_curl:`file.js` for middleware file.
      -  write a function with three parameters `(req, res, next)`.

-  ## :pointer_right: There are five types of middleware in Express JS.

   -  ### :pointer_right: Build In Middleware: like `express.json()`.

      -  `express.json()` helps to receive `json data` from `req.body`;
      -  Build in middleware will be use with `app.use(middleware)` parameter
         before routes and database connection
      -  Example:

      ```js
      app.use(express.json());
      ```

   -  ### :pointer_right: Application Label Middleware :

      -  Create a :page_with_curl:`file.js` for middleware.
      -  Create a `function` with three parameters `(req, res, next)`.
      -  A middleware function must `return` neither `response to client` or
         call the `next()` function
      -  then write `function codes ` and `export ` the function.

         ```js
         // the middleware counts applications every request
         let counter = 0;
         const viewCount = (req, res, next) => {
            counter++;
            console.log(counter);
            // res.send(" i send data "); // send the resposne directly
            next(); // call the next middleware:
         };

         module.exports = viewCount;
         ```

      -  to use the middleware just pass as parameter of
         `app.use(middlewareFunc)`.
      -  Application Label middleware function must call before
         `database connection` and `api routes`
      -  Example:

         ```js
         const viewCount = require("./middleware/viewCount/");

         app.use(viewCount);
         ```

   -  ### :pointer_right: Router Level Middleware :
      -  Router level middleware creation process like
         `Application level middleware`
      -  ### :pointer_right: how to use router level middleware?
      -  `pass` the middleware as parameter of `router.method()` before
         `controller function`.
      -  Example : -
      ```js
      router.get("/", viewCount, handleProduct.getProducts);
      ```
   -  ### :pointer_right: Third Partty Middleware:

      -  Third Partty pacakage provide some middleware.
      -  we can use `third party middleware` as `application level middleware`
         call the `middleware` in `app.use(middleware())`
      -  Example:

      ```js
      const { default: rateLimit } = require("express-rate-limit");

      const limiter = rateLimit({
         windowMs: 15 * 60 * 1000, // 15 minutes
         limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
         standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
         legacyHeaders: false, // Disable the `X-RateLimit-*` headers
         // store: ... , // Use an external store for more precise rate limiting
      });

      app.use(limiter);
      ```

      -  create middleware function on into middleware folder:

      ```js
      const { default: rateLimit } = require("express-rate-limit");

      const limiter = rateLimit({
         windowMs: 15 * 60 * 1000, // 15 minutes
         limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
         standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
         legacyHeaders: false, // Disable the `X-RateLimit-*` headers
         // store: ... , // Use an external store for more precise rate limiting
      });

      module.exports = limiter;
      ```

      -  We can use `third party middleware` as `router level middleware` by
         call the middleware before `controller function` of
         `rotuer.method(middleware, contorller_func)`
      -  Example:

      ```js
      router.get("/", viewCount, limiter, handleProduct.getProducts);
      ```

   -  ### :pointer_right: ERROR Handling Middleware:
      -
      -

# :wave: API methods:

-  ##### :pointer_right: Get() : By using get method we can get data from database.
-  ##### :pointer_right: POST() : By using post method we can post data into database.
-  ##### :pointer_right: PUT() : By using PUT method , we can update data. If data not exit on
   database, post the updated data.
-  ##### :pointer_right: PATCH() : Patch method works like PUT method. But if data not exit on

   database, PATCH() can't do anything

-  ##### :pointer_right: DELETE() : DELETE() helps to delete data from database.
