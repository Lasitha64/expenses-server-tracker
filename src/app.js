const express = require("express");
const dotenv = require("dotenv");
const app = express();
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoute");
const {errorHandler,notFound} = require("./middleware/errorMiddleware");


//env
dotenv.config();


//db connection
dbConnect();

//middleware
app.use(express.json());

app.get("/", (req,res)=>{
    res.json({msg:"Welcome to heroku"});
});

//routes
app.use("/api/users",userRoute)

//Error(order matters)
app.use(notFound);
app.use(errorHandler);


module.exports = app;