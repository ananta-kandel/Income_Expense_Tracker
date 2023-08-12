const express = require("express");

const {userLoginController,registerController,getregisterController} = require('../controllers/userController')

// router middleware 
const router = express.Router();
router.route("/login", userLoginController);
router.post("/register", registerController);
router.get("/register", getregisterController);
module.exports = router;