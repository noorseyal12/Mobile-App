const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
  },
  // You can add more fields based on your specific requirements
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
