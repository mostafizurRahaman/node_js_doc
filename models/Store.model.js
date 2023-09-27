const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
   {
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
      description: String,
      status: {
         type: String,
         enum: {
            values: ["active", "in-active"],
            message: "Status couldn't be  {VALUE}, status is active/in-active",
         },
      },
      manager: {
         name: String,
         contactNumber: String,
         id: {
            type: ObjectId,
            ref: "User",
         },
      },
   },
   {
      timestamps: true,
   }
);

const Store = mongoose.model("Store", storeSchema);

exports = Store;
