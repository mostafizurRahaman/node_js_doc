const Brand = require("../models/Brand.model");

module.exports.createBrandService = async (data) => {
   const brand = await Brand.create(data);
   return brand;
};

module.exports.getBrandService = async () => {
   const result = await Brand.find({}).select("-products -suppliers");
   return result;
};
module.exports.getBrandByIdService = async (id) => {
   const result = await Brand.findOne({ _id: id });
   return result;
};

module.exports.updateBrandByIdService = async (id, data) => {
   const result = await Brand.updateOne({ _id: id }, data, {
      runValidators: true,
   });
   return result;
};
