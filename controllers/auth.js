
const User=require("../models/user")
const jwt=require("jsonwebtoken");

module.exports.register= async function(req,res){
    console.log(req.body);
  try {
    const check= await User.findOne({email:req.body.email})
     
    if(check){
      return res.status(201).json({
        message:"User already exist",
        success:false
      })
    }
    const user = await User.create(req.body);
    console.log("created",user);

    return res.status(200).json(      {
      success: true,
      message: "User registered successfully",
      data: {
        token: jwt.sign(user.toJSON(), "chat", { expiresIn: "100000000" }),
        user
      },
    });
  } catch (err) {
    res.status(404).json({
      message: `${err}`,
    });
  }
   
 
}
module.exports.login= async function(req,res){
    console.log("hhhiiii in login");
    console.log("body",req.body.email);
    try {
      let user = await User.findOne({ email: req.body.email }).select(
          "+password"
      );
      console.log("user found", user);
      const password = req.body.password;
      // Check if password matches
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        console.log('Didnt match')
        // return next(new ErrorResponse("Password is invalid ", 401));
        return res.status(201).json({
          message: "Invalid password",
          success:false
        });
      } else if (!user) {
        console.log('No user')
        return res.status(400).json({
          message: "User not found",
          success:false
        });
      }
  
      return res.status(200).json({
        message: "Sign in successful, here is your token",
        success:true,
        data: {
          token: jwt.sign(user.toJSON(), "chat", { expiresIn: "100000000" }),
          user
        },
      });
    } catch (err) {
      console.log('server Error',err)
      return res.status(500).json({
        success:false,
        message: err,
      });
    }

}