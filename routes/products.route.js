const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
router.patch("/bulk-update", productController.bulkUpdateProductsByIds);
router.delete("/bulk-delete", productController.bulkDeleteProductByIds);

router
   .route("/")
   .get(productController.getProducts)
   .post(productController.saveProduct);

router
   .route("/:id")
   .patch(productController.updateProductById)
   .delete(productController.deleteProductById);
module.exports = router;
