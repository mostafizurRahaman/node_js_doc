const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// router :
const productRouter = require("./routes/products.route");
const brandRouter = require("./routes/brand.route");
const categoryRouter = require("./routes/category.route");

//  middleware
app.use(express.json());
app.use(cors());

//   middleware:

app.use("/api/v1/product", productRouter);
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/category", categoryRouter);

module.exports = app;
