const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//  middleware
app.use(express.json());
app.use(cors());

//  schema design :
const ProductSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "Products name is required"],
         trim: true,
         unique: [true, "Every Products name will be unique"],
         minLength: [3, "Products name min length should be 3 digits "],
         maxLength: [20, "Name is too large"],
      },
      description: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
         min: [0, "price can't be negative"],
      },
      unit: {
         type: String,
         required: true,
         enum: {
            values: ["kg", "litre", "pcs"],
            mesasge: "uint couldn't be {VALUE}, uint will be kg/litre/pcs",
         },
      },
      quantity: {
         type: Number,
         required: true,
         min: 0,
         validate: {
            validator: (value) => {
               const isInteger = Number.isInteger(value);
               if (isInteger) {
                  return true;
               } else {
                  return false;
               }
            },
         },
         message: "quantity shouldn't be {VALUE}, quyantity will be a number",
      },
      status: {
         type: String,
         required: true,
         enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "quantity shouldn't be {VALUE}",
         },
      },
      // createdBy: {
      //    type: Date,
      //    default: Date.now,
      // },
      // updatedBy: {
      //    type: Date,
      //    default: Date.now,
      // },
      // supplier: {
      //    type: mongoose.Schema.Types.ObjectId,
      //    ref: "Supplier",
      // },
      // categories: [
      //    {
      //       name: {
      //          type: String,
      //          required: true,
      //       },
      //       _id: mongoose.Schema.Types.ObjectId,
      //    },
      // ],
   },
   {
      timestamps: true,
      _id: true,
   }
);

const supplierSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         minLength: [3, "Name should be min 3 char"],
         maxLength: [50, "Name Should be max 50 char"],
      },
      address: {
         up: {
            type: String,
            required: true,
         },
         postcode: {
            type: Number,
            validate: {
               validator: (value) => {
                  if (`${value}`.length === 4) {
                     return true;
                  } else {
                     return false;
                  }
               },
               message: "post code must be 4 digits",
            },
         },
         dist: {
            type: String,
            required: true,
         },
      },
   },
   {
      timestamps: true,
   }
);

//  model :
const Product = mongoose.model("Product", ProductSchema);
const Supplier = mongoose.model("Supplier", supplierSchema);
app.get("/", (req, res) => {
   res.send("Route is working! YaY!");
});

app.post("/api/v1/product", async (req, res, next) => {
   try {
      const product = new Product(req.body);
      if (product.quantity === 0) {
         product.status = "out-of-stock";
      }
      const results = await product.save();

      res.status(200).send({
         success: true,
         message: "Product saved successfully",
         data: results,
      });
   } catch (err) {
      res.status(400).send({
         success: false,
         name: err.name,
         messsage: err.message,
      });
   }
});

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

app.post("/api/v1/supplier", async (req, res, next) => {
   try {
      const supplier = new Supplier(req.body);
      const result = await supplier.save();
      res.status(200).send({
         success: true,
         message: "Supplier saved successfully",
         data: result,
      });
   } catch (err) {
      res.status(400).send({
         success: false,
         message: err.message,
         name: err.name,
      });
   }
});

module.exports = app;
