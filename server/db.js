require("dotenv").config();
const mongoose = require('mongoose')

const db_connect= process.env.DB_CONNECTION

const connectToMongo = ()=>{
    
    mongoose.connect(db_connect)

}

module.exports = connectToMongo