const express = require("express");
const categoryController = require("../controller/category.controller");
const router = express.Router();

router
   .route("/")
   .get(categoryController.getCategory)
   .post(categoryController.createCategory);

router
   .route("/:id")
   .get(categoryController.getCategoryById)
   .patch(categoryController.updateCategoryById)
   .delete(categoryController.deleteCategoryById);

module.exports = router;
