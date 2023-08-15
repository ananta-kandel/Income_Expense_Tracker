const userModel = require("../models/UserModel");
const bcrypt = require('bcryptjs');
const userLoginController = async(req,res) =>{
   try{
      const {name , password} = req.body;
      let userFound = await userModel.findOne({name:name});
       let foundpassword = await bcrypt.compareSync(password ,userFound.password); // true

       if( !userFound || !foundpassword) {
        res.json({  
          mes : "invalid username"
        })
      }
      else{
        res.json({
          msg:"login sucessfull"
        })
      }
   }
   catch(e){
    res.status(400).json({
      msg:"login unsucessfull",
    })
   }
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
      res.status(400).json({
        success: false,
        error,
      });
    }
  };
const getregisterController =(req,res)=>{
    res.send("register user")
}


  
module.exports = {userLoginController, registerController,getregisterController} 