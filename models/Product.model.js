const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  categorie: {
    ref: "Categorie",
    required: mongoose.SchemaTypes.ObjectId,
  },
  brand: {
    ref: "Brand",
    required: mongoose.SchemaTypes.ObjectId,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
