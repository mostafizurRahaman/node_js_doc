const mongoose = require("mongoose");

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

ProductSchema.pre("save", function (next) {
   if (!this.quantity) {
      this.status = "out-of-stock";
   }
   console.log("Before saved product", " ", this.name);
   next();
});

ProductSchema.post("save", function (doc, next) {
   console.log(`Product saved for ${doc._id}`);
   next();
});

ProductSchema.methods.logger = function () {
   console.log(`Data saved for ${this.name}`);
};

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
