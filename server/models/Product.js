const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    attr: String,
    images: Image,
    date:{
      type:Date,
      default:Date.now
    }
  });
  const product = mongoose.model("products", ProductSchema);
  Store.createIndexes();
  const ProductModel = product
  
  module.exports = ProductModel;