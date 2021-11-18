const mongoose = require("mongoose");
const { Types } = require("mongoose");
const Schema = mongoose.Schema;
const cartsSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  user: {
    ref: "User",
    type: Schema.Types.ObjectId
  },
  product: [{
    ref: "Product",
    type: Schema.Types.ObjectId
  }],
});

const Carts = mongoose.model("Cart", cartsSchema);

module.exports = Carts;
