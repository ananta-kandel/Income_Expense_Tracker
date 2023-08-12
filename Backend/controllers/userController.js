const userModel = require("../models/UserModel");
const bcrypt = require('bcryptjs');
const userLoginController = (req,res) =>{
   res.send("hello")
}

var salt = bcrypt.genSaltSync(10);


const registerController = async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        var hash = bcrypt.hashSync(password, salt);
        const email = req.body.email;
        const newUser = new userModel({
        name : name,
        password:hash,
        email 
      });
      await newUser.save();
      res.status(201).json({
        success: true,
        newUser,
      });
    } catch (error) {
      res.status(400).send("Email already use").json({
        success: false,
        error,
      });
    }
  };
const getregisterController =(req,res)=>{
    res.send("register user")
}
  
module.exports = {userLoginController, registerController,getregisterController} 