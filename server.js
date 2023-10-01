const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// DBConnect();

// connect with mongoose:
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
   console.log(`Database Connected Sucessfully`.green.bold);
});

// server
const port = process.env.PORT || 8080;


app.listen(port, () => {
   console.log(`App is running on port ${port}`.yellow.bold);
});
