const mongoose = require("mongoose");

const staySchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  rating: Number,
  category: String,
  image: String,
  description: String,
});

module.exports = mongoose.model("Stay", staySchema);