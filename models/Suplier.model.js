const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "Please Provide a Supplier name"],
         trim: true,
         lowercase: true,
         unique: true,
         minLength: [3, "Supplier name  min length 3 char "],
         maxLength: [100, "Supplier name  min length 3 char "],
      },
      email: {
         type: String,
         validate: [validator.isEmail, "please provide a valid email"],
         trim: true,
         lowercase: true,
         unique: true,
      },
      brand: {
         name: {
            type: String,
            required: [true, "please provide a brand name"],
         },
         id: {
            type: ObjectId,
            required: [true, "please provide a brand id"],
            ref: "Brand",
         },
      },
      contactNumber: [
         {
            type: String,
            required: [true, "please provide a contactNumber"],
            validate: {
               validator: (value) => {
                  return validator.isMobilePhone(value);
               },
               message: "please provide a valid phone number",
            },
         },
      ],
      emergencyContact: {
         type: String,
         required: [true, "please provide a emergency contact number"],
         validate: {
            validator: (value) => {
               return validator.isMobilePhone(value);
            },
            message: "please provide a valid emergency contact number",
         },
      },
      tradeLicenseNumber: {
         type: Number,
         required: [true, "please provide a valid trade license number"],
      },
      presentAddress: {
         type: String,
         required: [true, "please provide your present address"],
      },
      permanentAddress: {
         type: String,
         required: [true, "please provide your permanent address"],
      },
      location: {
         type: String,
         required: [true, "please provide your location"],
         trim: true,
         lowercase: true,
         enum: {
            values: [
               "dhaka",
               "chattragram",
               "rangpur",
               "barisal",
               "khulna",
               "rajshahi",
               "shylet",
               "mymensigh",
            ],
            message: `{VALUE} is not location of supplier.`,
         },
      },
      imageUrl: {
         type: String,
         validate: [validator.isURL, "please provide a valid url"],
      },
      nationalIdCardImageUrl: {
         type: String,
         validate: [validator.isURL, "please provide a valid url"],
      },
      status: {
         type: String,
         required: true,
         enum: {
            values: ["active", "in-active"],
            message: "{VALUE} should't be status",
         },
      },
   },
   {
      timestamps: true,
   }
);

supplierSchema.pre("save", function (next) {
   console.log(this.name, "Ready to post ");
   next();
});
supplierSchema.post("save", function (doc,next) {
   console.log(doc.name, "posted successfully");
   next();
});
supplierSchema.methods.logger = function () {
   console.log(this._id + "logged successfully");
};

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
