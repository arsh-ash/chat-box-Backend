const Message=require("../models/message")
module.exports.createMessage= async function(req,res){
    let msg=await Message.create(req.body);

    return res.status(200).json({
        message:"new message is created",
        data:msg
    })

}
module.exports.messages=async function(req,res){
    console.log("params",req.params.conversationId)
    let chat=await Message.find({
        conversationId:req.params.conversationId

    })
    console.log("chat",chat);
return res.status(200).json({
    message:"all the message of conversation",
    data:chat,
})

}