const express=require("express");
const router=express.Router();

const authController=require("../controllers/auth");

// console.log("arsh in auth route");

router.post("/register",authController.register);
router.post("/login",authController.login);



module.exports=router;