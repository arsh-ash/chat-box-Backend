const mongoose = require("mongoose");
// const path=require("path");
// const multer=require("multer");
const bcrypt=require("bcryptjs");
//string is converted into path using path module
// const AVATAR_PATH=path.join("/upload/users/avatar");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select:false,
  },
  name: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});


userSchema.pre("save", async function (next) {
  if(this.password){
    const salt = await bcrypt.genSalt(10); 
    this.password = await bcrypt.hash(this.password, salt);
  }
   
  
  });
  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password); // this is the method which is gonna be called on actual user so it has access to the password
  };






const User=mongoose.model("User",userSchema);

module.exports=User;

