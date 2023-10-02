const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const uploader = require("../middleware/fileupload.middleware");

//  file upload route:
router.post(
   "/file-upload",
   uploader.single("image"),
   productController.fileUpload
);

//  bulk operation routes for products :
router.patch("/bulk-update", productController.bulkUpdateProductsByIds);
router.delete("/bulk-delete", productController.bulkDeleteProductByIds);

//  products route:
router
   .route("/")
   .get(productController.getProducts)
   .post(productController.saveProduct);

// single product by id
router
   .route("/:id")
   .patch(productController.updateProductById)
   .delete(productController.deleteProductById);
module.exports = router;





