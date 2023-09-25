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
      const query = req.query;
      const queryObject = {};
      const filter = { ...query };
      const excludedFields = ["page", "limit", "sort", "select"];
      excludedFields.forEach((field) => delete filter[field]);
      if (req?.query?.sort) {
         const sortBy = req.query.sort.split(",").join(" ");
         queryObject.sortBy = sortBy;
      }

      if (req.query.select) {
         const select = req.query.select.split(",").join(" ");
         queryObject.selectBy = select;
      }

      const product = await productservices.getProductService(
         filter,
         queryObject
      );

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

//  bulk - update by ids :

exports.bulkUpdateProductsByIds = async (req, res, next) => {
   try {
      console.log(req.body);
      const products = await productservices.bulkUdpateProductService(
         req.body.data
      );
      res.status(200).send({
         status: "success",
         message: "products udpated successfully by me",
         data: products,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

exports.deleteProductById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const product = await productservices.deleteProductServiceById(id);
      res.status(200).send({
         status: "success",
         message: "Product deleted successfuly",
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

//  bulk delete Product:

module.exports.bulkDeleteProductByIds = async (req, res, next) => {
   try {
      console.log(req.body);
      const { ids } = req.body;
      console.log(ids);
      const results = await productservices.bulkDeleteProductByIdService(ids);
      if (!results.deletedCount) {
         return res.status(400).send({
            status: "failed",
            message: "product not deleted successfully",
         });
      }
      res.status(200).send({
         status: "success",
         message: "products delete successfully",
         data: results,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
