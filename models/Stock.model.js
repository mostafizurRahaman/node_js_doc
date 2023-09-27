const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const stockSchema = mongoose.Schema(
   {
      productId: {
         type: ObjectId,
         ref: "Product",
         required: true,
      },
      name: {
         type: String,
         trim: true,
         lowercase: true,
         unique: true,
         required: true,
         minLength: [3, "Name should be min 3 char"],
         maxLength: [100, "Name should be max 100 char"],
      },
      description: String,
      unit: {
         type: String,
         required: true,
         enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "{VALUE} cann't be uint, unit will be kg/litre/pcs/bag",
         },
      },
      imageURLs: [
         {
            type: String,
            required: true,
            validate: {
               validator: (value) => {
                  if (!Array.isArray(value)) {
                     return false;
                  }
                  const isValid = true;
                  value.forEach((url) => {
                     if (!validator.isURL(url)) {
                        isValid = false;
                     }
                  });
                  return isValid;
               },
            },
         },
      ],
      price: {
         type: Number,
         required: true,
         min: [0, "Price can't be negative"],
      },
      quantity: {
         type: Number,
         require: true,
         min: [0, "Quantity can't be negative"],
      },
      status: {
         type: String,
         required: true,
         enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "{VALUE} can't be status",
         },
         default: "in-stock",
      },
      category: {
         type: String,
         required: true,
      },
      brand: {
         name: {
            type: String,
            required: true,
         },
         id: {
            type: ObjectId,
            ref: "Brand",
         },
      },
      store: {
         name: {
            type: String,
            required: [true, "Please provide a valid store name"],
            enum: {
               values: [
                  "dhaka",
                  "chittagong",
                  "cumilla",
                  "laskhmipur",
                  "feni",
                  "jessor",
                  "rajshahi",
                  "rangpur",
               ],
               message: "{VALUE} is not a store",
            },
         },
         id: {
            type: ObjectId,
            ref: "Store",
            required: true,
         },
      },
      suppliedBy: {
         name: {
            type: String,
            required: true,
            lowercase: true, 
            trim:true,                 
            
         },
         id: {
            type: ObjectId,
            required: true,
            ref: "Supplier",
         },
      },
   },
   {
      timestamps: true,
   }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
