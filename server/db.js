const mongoose = require('mongoose')

const mongoURI ="mongodb+srv://SanoManjiro:VGuzyiqeLZ6Isick@cluster0.xukwrtj.mongodb.net/painandgain?retryWrites=true&w=majority"

const connectToMongo = ()=>{

    mongoose.connect(mongoURI)

}

module.exports = connectToMongo