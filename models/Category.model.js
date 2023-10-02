const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "please provide a Category name"],
         unique: true,
         trim: true,
         lowercase: true,
      },
      description: String,
      imageUrl: {
         type: String,
         validate: [validator.isURL, "Please provide a valid url"],
      },
   },
   {
      timestamps: true,
   }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;