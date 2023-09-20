const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();
const productsRoute = require("./route/v1/products.route");
const viewCount = require("./middleware/viewCount");
const ejs = require("ejs");
const { errorHandler } = require("./middleware/errorHandler");
// const { default: rateLimit } = require("express-rate-limit");

//  app route:

const app = express();
//  port :

//  limiter configs :
// const limiter = rateLimit({
//    windowMs: 15 * 60 * 1000, // 15 minutes
//    limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//    standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
//    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//    // store: ... , // Use an external store for more precise rate limiting
// });

//  middleware :
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");
// third party middleware :
// app.use(limiter);
// app.use(viewCount);

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
   // res.sendFile(__dirname + "/public/result.html");
   res.render("products.ejs", {
      user: {
         name: "Mostafizur Rahaman",
         email: "mostafizurrahaman@gmail.com",
      },
   });
});
app.all("*", (req, res) => {
   ``;
   res.send("The API routes not found");
});

app.use(errorHandler);
app.listen(port, () => {
   console.log(`server is running on ${port}`);
});

process.on("unhandledRejection", (error) => {
   console.log(error.message, error.name);
   app.close(() => {
      process.exit(1);
   });
});


