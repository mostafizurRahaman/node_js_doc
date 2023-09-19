const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();
const productsRoute = require("./route/v1/products.route");
//  app route:

const app = express();
//  port :

//  middleware :
app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/v1/products", productsRoute);

const port = process.env.PORT || 5000;

const run = async () => {
   try {
   } finally {
   }
};

run().catch((err) => console.dir(err));

app.get("/", (req, res) => {
   res.send(`server is running now`);
});

app.listen(port, () => {
   console.log(`server is running on ${port}`);
});
