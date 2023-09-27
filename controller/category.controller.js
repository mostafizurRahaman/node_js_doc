const {
   createCategoryService,
   getCategoryService,
   getCategoryByIdService,
   udpateCategoryByIdService,
   deleteCategoryByIdService,
} = require("../services/category.services");

module.exports.getCategory = async (req, res, next) => {
   try {
      const categories = await getCategoryService();
      res.status(200).send({
         status: "success",
         message: "Categoies found successfully",
         data: categories,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.createCategory = async (req, res, next) => {
   try {
      const categories = await createCategoryService(req.body);
      res.status(200).send({
         status: "success",
         message: "Category created successfully",
         data: categories,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.getCategoryById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const category = await getCategoryByIdService(id);
      if (!category) {
         return res.status(400).send({
            statu: "failed",
            message: `Category cann't found with this ${id}`,
         });
      }
      res.status(200).send({
         status: "success",
         message: "Category Found Successfully",
         data: category,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.updateCategoryById = async (req, res, next) => {
   try {
      const { id } = req.params;

      const isExits = await getCategoryByIdService(id);
      if (!isExits) {
         return res.status(400).send({
            statu: "failed",
            message: `Category cann't found with this ${id}`,
         });
      }

      const restult = await udpateCategoryByIdService(id, req.body);
      if (!restult.nModified) {
         return res.status(400).send({
            statu: "failed",
            message: `Category cann't udpated with this ${id}`,
         });
      }
      res.status(200).send({
         status: "success",
         message: "Category Found Successfully",
         data: restult,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
module.exports.deleteCategoryById = async (req, res, next) => {
   try {
      const { id } = req.params;

      const isExits = await getCategoryByIdService(id);
      if (!isExits) {
         return res.status(400).send({
            statu: "failed",
            message: `Category cann't found with this ${id}`,
         });
      }

      const result = await deleteCategoryByIdService(id);

      if (!result.deletedCount) {
         return res.status(400).send({
            statu: "failed",
            message: `Category cann't deleted with this ${id}`,
         });
      }
      res.status(200).send({
         status: "success",
         message: "Category Found Successfully",
         data: result,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
