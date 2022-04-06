const express=require("express");
const router=express.Router();

const conversationController=require("../controllers/conversation_controller")

router.post("/create",conversationController.createConversation);
router.get("/:userId",conversationController.getConversation);



module.exports=router;