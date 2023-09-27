const Category = require("../models/CategorySchema");

module.exports.getCategoryService = async () => {
   const categories = await Category.find({});
   return categories;
};

module.exports.createCategoryService = async (data) => {
   const category = new Category(data);
   const results = await category.save();
   return results;
};

module.exports.getCategoryByIdService = async (id) => {
   const categories = await Category.findOne({ _id: id });
   return categories;
};

module.exports.udpateCategoryByIdService = async (id, data) => {
   const result = await Category.updateOne({ _id: id }, data, {
      runValidators: true,
   });
   return result;
};

module.exports.deleteCategoryByIdService = async (id) => {
   const result = await Category.deleteOne({ _id: id });
   console.log(result);
   return result;
};
