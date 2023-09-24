const Product = require("../models/Product.model");

module.exports.getProductService = async () => {
   const product = await Product.find({});
   return product;
};

module.exports.saveProductService = async (data) => {
   const product = new Product(data);
   const results = await product.save();
   return results;
};
/**
 *  @udpatedByOne
module.exports.updateProductServices = async (id, data) => {
   const results = await Product.updateOne(
      { _id: id },
      { $inc: { price: data.price } },
      {
         runValidators: true,
      }
   );
   return results;
};
 */

//  udpate by using save() method:
module.exports.updateProductServices = async (id, data) => {
   const product = await Product.findOne({ _id: "650fbdb2d8d38a26202ee293" });

   // set the data with product.set(newData)
   //  and save()

   const results = await product.set(data).save();
   return results;
};
