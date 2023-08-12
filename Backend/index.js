const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()
// const morgan = require("morgan");

//connect to mongodb
const ConnectToMongoDb = require("./config/db.config")
ConnectToMongoDb();

const app = express();
app.use(cors());

//for port to run backend
const port = process.env.PORT ;


//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes 
const register = require("./routes/userRoutes")
app.use("/api/v1/users",register );


//Listen to server
app.listen(port, () => {
    console.log(`Income Expense Tracker app listening on port ${port}`)
  })
