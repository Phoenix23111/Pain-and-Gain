const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken")
const JWT_SECRET = "this is @ Secret"




router.post("/createUser",
  //Validations
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Enter a Valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Creating Users and checking if that user exists or not
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      //Checking IF the user Exisits!!
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry The email Already Exists!!  " });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt);
      //Creating the User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data={
        user:{
          id:user.id
        }
      }
      //res.json(user)

      const authtoken = jwt.sign(data, JWT_SECRET)
      console.log(authtoken)
      res.json({authtoken});


    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
//ROUTE:2 Authenticate a User

Route.

//ROUTE:3 GET USER

router.post('/getuser',async(req,res)=>{

  try {
    userId ="todo"
    const user = await User.findById(userId).select("-password"
    )
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
  }

})

module.exports = router;
