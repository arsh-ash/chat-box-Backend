const mongoose = require("mongoose");

const bcrypt=require("bcryptjs");

const conversationSchema = new mongoose.Schema({
    members:{
        type:Array,
    }
  
  
  
},{
    timestamps:true
});









const Conversation=mongoose.model("Conversation",conversationSchema);

module.exports=Conversation;

