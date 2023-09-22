const express = require("express");
const handleProduct = require("../../controller/products.controller");
const viewCount = require("../../middleware/viewCount");
// const limiter = require("../../middleware/mylimiter");
//  define a router :
const router = express.Router();

//  define get api with router:

// router.get("/", viewCount,limiter, handleProduct.getProducts);
router.get("/", handleProduct.getProducts);
/**
 * @api {get } /products All products
 * @apiDescription get all products
 * @apiPermission all users
 *
 * @apiHeader  {String}  Authorization User_Access_token
 * @apiQuery  {Number{1-}} [page=1] page list
 * @apiQuery {Number{1-100}} [page={1-100}] products perpage
 */

router.post("/", handleProduct.saveProducts);
router.patch("/", handleProduct.updateProducts);


//  all define router for products id :

// we aslo call multiple method of router.route('/path').get((req,res)=> {}).post((req,res)=>{}).delete((req,res)=>{})

router
   .route("/:id")
   .get(handleProduct.getProductsById)
   .put(handleProduct.updateProductsById)
   .delete(handleProduct.deleteProductsById);

module.exports = router;
