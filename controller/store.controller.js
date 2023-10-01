const {
   getStoresService,
   createStoreService,
   getStoreByIdService,
   updateStoreByIdService,
   deleteStoreByIdService,
} = require("../services/store.services");

module.exports.getStores = async (req, res, next) => {
   try {
      const stores = await getStoresService();
      res.status(200).send({
         status: "success",
         message: "stores found successfully",
         data: stores,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.createStore = async (req, res, next) => {
   try {
      const store = await createStoreService(req.body);
      res.status(200).send({
         status: "success",
         message: "store create successfully",
         data: store,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};

module.exports.getStoreById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const store = await getStoreByIdService(id);
      if (!store) {
         res.status(400).send({
            status: "failed",
            message: "store not found for this id " + id,
            data: store,
         });
      }
      res.status(200).send({
         status: "success",
         message: "store found successfully",
         data: store,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
module.exports.updateStoreById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const result = await getStoreByIdService(id);
      if (!result) {
         res.status(400).send({
            status: "failed",
            message: "store not found for this id " + id,
         });
      }

      const store = await updateStoreByIdService(id, req.body);
      if (!store?.nModified) {
         return res.status(400).send({
            status: "failed",
            message: "data not updated successfully " + id,
         });
      }
      res.status(200).send({
         status: "success",
         message: "store found successfully",
         data: store,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
module.exports.deleteStoreById = async (req, res, next) => {
   try {
      const { id } = req.params;
      const result = await getStoreByIdService(id);
      if (!result) {
         res.status(400).send({
            status: "failed",
            message: "store not found for this id " + id,
         });
      }

      const store = await deleteStoreByIdService(id);
      if (!store?.deletedCount) {
         return res.status(400).send({
            status: "failed",
            message: "store not deleted successfully " + id,
         });
      }
      res.status(200).send({
         status: "success",
         message: "store found successfully",
         data: store,
      });
   } catch (err) {
      res.status(400).send({
         status: "failed",
         message: err.message,
         name: err.name,
      });
   }
};
