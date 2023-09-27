const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const BrandSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "Please provide a brand name"],
         trim: true,
         unique: true,
         maxLength: 100,
         lowercase: true,
      },
      descirption: String,
      email: {
         type: String,
         lowercase: true,
         validate: [validator.isEmail, "Please Provide a valid email"],
      },
      website: {
         type: String,
         validate: [validator.isURL, "Please Provide a valid url"],
      },
      products: [
         {
            type: ObjectId,
            ref: "Product",
         },
      ],
      suppliers: [
         {
            name: String,
            contactNumber: String,
            id: {
               type: ObjectId,
               ref: "Supplier",
            },
         },
      ],
      status: {
         type: String,
         enum: {
            values: ["active", "inactive"],
            message:
               "Brand status couldn't be {VALUE}, status will be active/inactive",
         },
         default: "active",
      },
   },
   {
      timestamps: true,
   }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
