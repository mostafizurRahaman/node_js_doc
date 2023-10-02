const Supplier = require("../models/Suplier.model");

module.exports.getSupplierService = async () => {
   const suppliers = await Supplier.find({});
   return suppliers;
};

module.exports.createSupplierService = async (data) => {
   const supplier = new Supplier(data);
   const results = await supplier.save();
   return results;
};

module.exports.getSupplierByIdService = async (id) => {
   const supplier = await Supplier.findById(id);
   return supplier;
};
