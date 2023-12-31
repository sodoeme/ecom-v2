const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    brand: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    tags: { type: Array, required: true },
    img: { type: String, required: true },
});


//collection name is stories in the database
module.exports = mongoose.model("Product", productSchema);
