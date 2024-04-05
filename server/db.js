const mongoose = require('mongoose')
require('dotenv').config()


const connectToMongo = ()=>{

    mongoose.connect(process.env.mongoURI)

}

module.exports = connectToMongo