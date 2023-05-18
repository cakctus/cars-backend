import { Request, Response, NextFunction } from "express"
import ChatService from "../../services/chat/chatService"

class ChatController {
  async addId(req: Request, res: Response, next: NextFunction) {
    try {
      const { myId, id } = req.body
      const response = await ChatService.addIdService(myId, id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async myChats(req: Request, res: Response, next: NextFunction) {
    try {
      const { myId } = req.params
      const response = await ChatService.myChatsService(Number(myId))
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async addMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { from, to, message } = req.body
      console.log(req.body)
      const response = await ChatService.addMessageService(from, to, message)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { from, to } = req.body
      const response = await ChatService.getMessageService(from, to)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new ChatController()