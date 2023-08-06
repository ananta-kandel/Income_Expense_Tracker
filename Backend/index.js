const express = require('express');
const cors = require('cors');
require('dotenv').config()

//connect to mongodb
const ConnectToMongoDb = require("./config/db.config")
ConnectToMongoDb();

const app = express();
app.use(cors());

//for port to run backend
const port = process.env.PORT || 5000; 



app.get("/",(req,res)=>{
    res.send("Hello world")
})

//Listen to server
app.listen(port, () => {
    console.log(`Income Expense Tracker app listening on port ${port}`)
  })
