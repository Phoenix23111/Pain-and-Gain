const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique:true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date:{
      type:Date,
      default:Date.now
    }
  });
  const Store = mongoose.model("store", StoreSchema);
  Store.createIndexes();
  const StoreModel = Store
  
  module.exports = StoreModel;