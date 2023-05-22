import { Router } from "express"
import ChatController from "../../controllers/chat/chatController"

const router: Router = Router()

router.post("/add-id", ChatController.addId)
router.get("/my-chat/:myId/:userId", ChatController.myChats)
router.post("/addmsg", ChatController.addMessage)
router.post("/getmsg", ChatController.getMessage)

export default router
