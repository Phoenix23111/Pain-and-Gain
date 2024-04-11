
const  { newUser, fetchAllUser,fetchUser,deleteUser } = require("../controller/user")

const express = require("express")
const User = require("../models/Users");

const router = express.Router();


router.post("/new",newUser)
router.post("/all",fetchAllUser)
router.route("/:id").post(fetchUser).delete(deleteUser)


module.exports = router;