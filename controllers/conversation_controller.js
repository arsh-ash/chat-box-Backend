const Conversation = require("../models/conversation")



module.exports.createConversation= async function(req,res){
console.log("inside conversation controller");
//array m data dalna ho to aise dalte h ya phir type array ho key value ka
 let con=await Conversation.create({members:[req.body.sendersId,req.body.recieversId]});
//  let con=await Conversation.create({members:req.body});



    return res.status(200).json({
        message:"conversation is created",
        data:con,
    })

}
module.exports.getConversation=async function(req,res){
   let data= await Conversation.find({
        members:{$in:[req.params.userId]}
    })
    return res.status(200).json({
        message:"conversations of loggedIn user",
        data:data
    })

}