const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

const products = [
   { id: 1, name: "tshirt" },
   {
      id: 2,
      name: "shirt",
   },
   {
      id: 3,
      name: "gense",
   },
   {
      id: 4,
      name: "pollo tshirt",
   },
   {
      id: 5,
      name: "blesure",
   },
   {
      id: 6,
      name: "cort",
   },
   {
      id: 7,
      name: "sari",
   },
   {
      id: 8,
      name: "panjabi",
   },
   { id: 9, name: "potuya" },
   { id: 10, name: "balis" },
];

module.exports.getProducts = async (req, res, next) => {
   try {
      const db = getDb();
      const { limit, page } = req.query;
      console.log(limit, page);
      //  cursor :
      // const cursor = db
      //    .collection("tools")
      //    .find({}, { projection: { name: 1, _id: 0 } });
      const cursor = db
         .collection("tools")
         .find({})
         .skip(+page * +limit)
         .limit(+limit);
      // we can find element by using toArray() or forEach():
      const tools = await cursor.toArray();
      res.status(200).send({ success: true, message: "success", data: tools });
   } catch (err) {
      next(err);
   }
};

module.exports.saveProducts = async (req, res, next) => {
   try {
      const db = getDb();
      const toolsCollection = db.collection("tools");
      const tool = req.body;
      if (!tool.name || !tool.price) {
         return res.status(403).send({
            success: false,
            message: "required information not found",
         });
      }
      const result = await toolsCollection.insertOne(tool);
      if (!result.insertedId) {
         return res
            .status(401)
            .send({ success: false, message: "tools not inserted or posted" });
      }
      res.status(200).send({ success: true, message: "success", data: result });
   } catch (err) {
      next(err);
   }
};

module.exports.getProductsById = async (req, res, next) => {
   try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
         return res
            .status(401)
            .send({ success: false, message: "enter a valid id" });
      }

      const db = getDb();
      const tool = await db
         .collection("tools")
         .findOne({ _id: new ObjectId(id) });
      if (!tool) {
         return res.status(400).send({
            success: false,
            message: "Couldn't find a tool with this id",
         });
      }
      res.status(200).send({ success: true, message: "success", data: tool });
   } catch (err) {
      next(err);
   }
};
module.exports.updateProductsById = async (req, res, next) => {
   try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
         return res
            .status(401)
            .send({ success: false, message: "enter a valid id" });
      }

      const db = getDb();
      const tool = await db
         .collection("tools")
         .udpateOne({ _id: new ObjectId(id) }, { $set: { quantity: 10 } });
      if (!tool.modifiedCount && !tool.matchedCount) {
         return res.status(400).send({
            success: false,
            message: "Couldn't find a tool with this id",
         });
      }
      res.status(200).send({ success: true, message: "success", data: tool });
   } catch (err) {
      next(err);
   }
};
module.exports.updateProducts = async (req, res, next) => {
   try {
      const { quantity } = req.body;
      if (!quantity) {
         return res
            .status(400)
            .send({ success: false, message: "quantity not found into body" });
      }
      const db = getDb();
      const tool = await db
         .collection("tools")
         .updateMany(
            { quantity: { $exists: false } },
            { $set: { quantity: +quantity } }
         );
      if (!tool.modifiedCount && !tool.matchedCount) {
         return res.status(400).send({
            success: false,
            message: "Couldn't find any tools",
         });
      }
      res.status(200).send({ success: true, message: "success", data: tool });
   } catch (err) {
      next(err);
   }
};
module.exports.deleteProductsById = async (req, res, next) => {
   try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
         return res
            .status(401)
            .send({ success: false, message: "enter a valid id" });
      }

      const db = getDb();
      const tool = await db
         .collection("tools")
         .deleteOne({ _id: new ObjectId(id) }, { $set: { quantity: 10 } });
      if (!tool.deletedCount) {
         return res.status(400).send({
            success: false,
            message: "Couldn't find a tool with this id",
         });
      }
      res.status(200).send({ success: true, message: "success", data: tool });
   } catch (err) {
      next(err);
   }
};
   