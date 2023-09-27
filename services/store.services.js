const Store = require("../models/Store.model");

module.exports.getStoresService = async () => {
   const stores = await Store.find({});
   return stores;
};

module.exports.createStoreService = async (data) => {
   const store = await Store.create(data);
   console.log(store);
   return store;
};
module.exports.getStoreByIdService = async (id) => {
   const store = await Store.findOne({ _id: id });
   return store;
};

module.exports.updateStoreByIdService = async (id, data) => {
   const result = await Store.updateOne({ _id: id }, data, {
      runValidators: true,
   });

   return result;
};

module.exports.deleteStoreByIdService = async (id) => {
   const result = await Store.updateOne({ _id: id });
   return result;
};
