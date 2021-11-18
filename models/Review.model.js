const mongoose = require("mongoose");


const reviewsSchema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    }
})


const Review = mongoose.model("Review", reviewsSchema);


module.exports = Review;