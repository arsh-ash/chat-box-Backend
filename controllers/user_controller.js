const User=require("../models/user") 
module.exports.getCurrentUser=async function(req,res){
    let user= await User.findById(req.params.id);
    if(user){
        console.log(user)
        return res.status(200).json({
            message:"current user fetched",
            data:user,
        })
    }

}