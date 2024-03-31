const mongoose = require('mongoose')

const mongoURI ="mongodb+srv://SanoManjiro:0lF25twS0IM97Dem@cluster0.xukwrtj.mongodb.net/"

const connectToMongo = ()=>{

    mongoose.connect(mongoURI)

}

module.exports = connectToMongo