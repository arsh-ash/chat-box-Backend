const express=require("express");
const router=express.Router();
const userController=require("../controllers/user_controller")
router.get("/getCurrentUser/:id",userController.getCurrentUser);



module.exports=router;