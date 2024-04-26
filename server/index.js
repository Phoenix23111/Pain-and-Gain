require("dotenv").config();
const colors = require('colors');
const connectToMongo = require("./db");
const express = require("express");
const UserModel = require("./models/Users");
const app = express();
const cors = require("cors");
const { errorMiddleware } = require("./middleware/error");
connectToMongo();



app.use(express.json());
app.use(cors());
const port=process.env.port


// available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/v1/user', require('./routes/user'))

app.use('/api/v1/product',require('./routes/products'))


app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware)

app.listen(port, () => {
  console.log("Server Runs Perfectly at port:".cyan, `${port}`.yellow);

});
