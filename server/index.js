const connectToMongo = require("./db");
const express = require("express");
const UserModel = require("./models/Users");
const app = express();
const cors = require("cors");
connectToMongo();
port = 3001;

app.use(express.json());
app.use(cors());

// available routes

app.use('/api/auth',require('./routes/auth'))
  


app.get("/getUsers", async (req, res) => {
  try {
    const result = await UserModel.find({}).exec();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.status(201).json(newUser); // 201 Created status for successful creation
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server Runs Perfectly at port " + port);
});
