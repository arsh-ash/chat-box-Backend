const express=require("express");
const app=express();
const cors =require("cors")

const port=8000;
const databaseFile=require("./config/database");
databaseFile.connectDB();
const passport=require("passport");
const passportJWT=require("./config/passport-jwt-strategy");
app.use(express.json());
app.use(cors())

app.use(passport.initialize());


app.use("/",require("./routes"));


app.listen(port,function(err){
    if(err){
        console.log("error in running server");
    }
    return console.log(`server is on port :${port}`);
})