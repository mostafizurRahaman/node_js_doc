const productservices = require("./../services/product.services");
module.exports.getProducts = async (req, res, next) => {
   try {
      // const product = await Product.find({ price: { $lt: 100 } })
      //    .select({ quantity: 0 })
      //    .skip(2)
      //    .limit(3)
      //    .sort({ price: -1 });

      // const product = await Product.find({name: {$in : ['Chal', "Dhal"]}});
      // const product = await Product
      //    .where("quantity").gte(100).lt(3000)
      //    .where("name").regex(/ch/)
      //    .where("price")
      //    .gt(0);

      // const product = await Product.find({
      //    $and: [{ name: { $regex: /M/ } }, { price: { $gt: 100 } }],
      // });

      const product = await productservices.getProductService();
      res.status(200).send({
         status: "success",
         message: "Data found successfully",
         data: product,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.saveProduct = async (req, res, next) => {
   try {
      const results = await productservices.saveProductService(req.body);
      results.logger();
      res.status(200).send({
         success: true,
         message: "Product saved successfully",
         data: results,
      });
   } catch (err) {
      res.status(400).send({
         success: false,
         name: err.name,
         messsage: err.message,
      });
   }
};

//  update product:

module.exports.updateProductById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const results = await productservices.updateProductServices(id, req.body);

      res.status(200).send({
         status: "success",
         message: "Data successfully udpated",
         data: results,
      });
   } catch (err) {
      res.status(400).send({
         success: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
