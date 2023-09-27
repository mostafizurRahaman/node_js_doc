const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const productSchema = mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         requird: [true, "Please provide a product name"],
         unique: true,
         lowercase: true,
         minLength: [3, "Name should be min 3 charcter"],
         maxLength: [100, "Name should be max 100 character"],
      },
      description: {
         type: String,
         required: true,
      },
      unit: {
         type: String,
         required: true,
         enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "{VALUE} is a valid unit.Unit will be kg/litre/pcs/bag",
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
            required: true,
         },
      },
   },
   {
      timestamps: true,
   }
);

// productSchema.pre("save", function (next) {
//    if (!this.quantity) {
//       this.status = "out-of-stock";
//    }
//    console.log("Before saved product", " ", this.name);
//    next();
// });

// productSchema.post("save", function (doc, next) {
//    console.log(`Product saved for ${doc._id}`);
//    next();
// });

// productSchema.methods.logger = function () {
//    console.log(`Data saved for ${this.name}`);
// };

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
