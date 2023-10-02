const {
   getSupplierService,
   createSupplierService,
   getSupplierByIdService,
   updateSupplierByIdService,
   deleteSupplierByIdService,
} = require("../services/supplier.service");

module.exports.getSupplier = async (req, res, next) => {
   try {
      const suppliers = await getSupplierService();
      return res.status(200).send({
         status: "success",
         message: "data found successfully",
         data: suppliers,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.createSupplier = async (req, res, next) => {
   try {
      const supplier = await createSupplierService(req.body);
      if (!supplier) {
         return res.status(400).send({
            status: "failed",
            message: "Supplier not posted successfully",
         });
      }
      res.status(200).send({
         status: "success",
         message: "supplier  created successfully",
         data: supplier,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.getSupplierById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const supplier = await getSupplierByIdService(id);
      if (!supplier) {
         return res.status(400).send({
            status: "failed",
            message: "supplier not found successfully",
         });
      }
      res.status(200).send({
         status: "success",
         message: "supplier found successfully",
         data: supplier,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.updateSupplierById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const supplier = await getSupplierByIdService(id);
      if (!supplier) {
         return res.status(400).send({
            status: "failed",
            message: "supplier not found successfully",
         });
      }

      const results = await updateSupplierByIdService(id, req.body);
      console.log(results);
      if (!results.nModified) {
         return res.status(400).send({
            status: "failed",
            message: `Data didn't updated successfully`,
         });
      }
      res.status(200).send({
         status: "success",
         message: "supplier updated successfully",
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


module.exports.deleteSupplierById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const supplier = await getSupplierByIdService(id);
      if (!supplier) {
         return res.status(400).send({
            status: "failed",
            message: "supplier doesn't find ",
         });
      }

      const results = await deleteSupplierByIdService(id);
      console.log(results);
      if (!results.deletedCount) {
         return res.status(400).send({
            status: "failed",
            message: `Data didn't delete `,
         });
      }
      res.status(200).send({
         status: "success",
         message: "supplier deleted successfully",
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
