const {
   createBrandService,
   getBrandService,
   getBrandByIdService,
   updateBrandByIdService,
} = require("../services/brand.services");

module.exports.createBrand = async (req, res, next) => {
   try {
      const brand = await createBrandService(req.body);
      res.status(200).send({
         status: "success",
         message: "Brand Created Successfully",
         data: brand,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: "Brand couldn't be created",
      });
   }
};

module.exports.getBrands = async (req, res, next) => {
   try {
      const results = await getBrandService();
      res.status(200).send({
         status: "success",
         message: "Brand Created Successfully",
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
module.exports.getBrandById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const results = await getBrandByIdService(id);
      if (!results) {
         return res.status(400).send({
            status: "fail",
            message: "Brand not found with this Id",
         });
      }
      res.status(200).send({
         status: "success",
         message: "Brand Found by Id Successfully",
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

module.exports.updateBrandById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const result = await updateBrandByIdService(id, req.body);
      if (!result.nModified) {
         return res.status(400).send({
            status: "failed",
            message: `not updated brand with this ${id}`,
         });
      }
      res.status(200).send({
         status: "success",
         messsage: "Brand updated successfully",
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
