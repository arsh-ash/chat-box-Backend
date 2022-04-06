const express=require("express");
const router=express.Router();
const messageController=require("../controllers/message_controller")

router.post("/create",messageController.createMessage);
router.get("/:conversationId",messageController.messages);



module.exports=router;