const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router
   .route("/")
   .get(productController.getProducts)
   .post(productController.saveProduct);

router.route("/:id").patch(productController.updateProductById);
module.exports = router;
