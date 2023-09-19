# :wave: What is express JS?

-  Express Js is a fast, Unopinionated, Minimalist web framework for node js .

# :wave: Why we use Express Js :

-  Unopininated - means full control
-  Fast
-  Free and open source
-  Easy
-  Popular

# MVC

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
