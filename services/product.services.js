const Brand = require("../models/Brand.model");
const Product = require("../models/Product.model");

module.exports.getProductService = async (filter, queryObject) => {
   console.log(queryObject.sortBy);
   const product = await Product.find(filter)
      .skip(queryObject.skip)
      .limit(queryObject.limit)
      .sort(queryObject.sortBy)
      .select(queryObject.selectionBy);

   const total = await Product.countDocuments(filter);
   const pages = Math.ceil(total / queryObject.limit);

   return { pages, total, product };
};

module.exports.saveProductService = async (data) => {
   const product = new Product(data);
   const results = await product.save();
   // results.logger();
   //  get product id and brand details:
   const { _id: productId, brand } = results;
   // update brand product:
   const brandProduct = await Brand.updateOne(
      { _id: brand.id },
      { $push: { products: productId } },
      {
         runValidators: true,
      }
   );

   if (brandProduct.nModified) {
      return results;
   }
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

// module.exports.bulkUdpateProductService = async (data) => {
//    console.log(data);
//    const products = await Product.updateMany(
//       { _id: data.ids },
//       { $set: data.data },
//       {
//          runValidators: true,
//       }
//    );
//    return products;
// };

module.exports.bulkUdpateProductService = async (data) => {
   console.log(data);
   const products = [];
   data.forEach((i) => {
      products.push(
         Product.updateOne({ _id: i._id }, { $set: { price: i.info.price } })
      );
   });

   const results = await Promise.all(products);
   return results;
};

module.exports.deleteProductServiceById = async (productId) => {
   const results = await Product.deleteOne({ _id: productId });
   return results;
};

module.exports.bulkDeleteProductByIdService = async (productIds) => {
   console.log(productIds);
   const results = await Product.deleteMany({ _id: productIds });
   return results;
};
