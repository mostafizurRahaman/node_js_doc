const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//  middleware
app.use(express.json());
app.use(cors());

//   middleware:


// router :
const productRouter = require("./routes/products.route");

app.use("/api/v1/product", productRouter);

// app.post("/api/v1/product", async (req, res, next) => {
//    try {
//       const results = await Product.create(req.body);
//       res.status(200).send({
//          success: true,
//          message: "product save successfully",
//          data: results,
//       });
//    } catch (err) {
//       res.status(400).send({
//          success: false,
//          message: err.message,
//          name: err.name,
//       });
//    }
// });

module.exports = app;
