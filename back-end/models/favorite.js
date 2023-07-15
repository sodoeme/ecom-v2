const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favoriteSchema = new Schema({
  user: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, required: true },
});

//collection name is stories in the database
module.exports = mongoose.model("Favorite", favoriteSchema);
