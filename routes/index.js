const express=require("express");
const router=express.Router();

const authController=require("../controllers/auth");

// console.log("arsh in index route");

router.use("/auth",require("./auth"));
router.use("/conversation",require("./conversation"));
router.use("/message",require("./message"));
router.use("/user",require("./user"));




module.exports=router;


