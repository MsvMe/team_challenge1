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
    type: mongoose.SchemaTypes.ObjectId,
  },
  brand: {
    ref: "Brand",
    type: mongoose.SchemaTypes.ObjectId,
  },
  amount: {
      type : Number,
      required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
