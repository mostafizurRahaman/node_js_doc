const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// DBConnect();

// connect with mongoose: 
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
  console.log(`Database Connected Sucessfully`.red.bold.underline)
})

// server
const port = process.env.PORT || 8080;



app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

