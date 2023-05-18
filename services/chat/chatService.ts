import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class ChatService {
  async addIdService(myId: number, id: number) {
    const chat = await prisma.chat.create({
      data: {
        myId: myId,
        userId: [myId, id],
      },
    })
    return chat
  }

  async myChatsService(myId: number) {
    const chats = await prisma.chat.findMany({
      where: {
        myId,
      },
    })
    const arrayOfChats = chats.map((chat) => chat.userId)
    const arr = arrayOfChats.flat()
    const users = await prisma.user.findMany({
      // where: {
      //   id: { in: arr },
      // },
      where: {
        id: {
          in: arr,
          notIn: myId,
        },
      },
    })
    if (chats) return users
    return []
  }

  async addMessageService(from: any, to: any, message: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: from,
      },
    })

    const data = await prisma.message.create({
      data: {
        message: message,
        users: [from, to],
        user: {
          connect: {
            id: user!.id,
          },
        },
      },
    })

    if (data) return { msg: "Message added successfully." }
    else return { msg: "Failed to add message to the database" }
  }

  async getMessageService(from: any, to: any) {
    const messages = await prisma.message.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: false,
            username: false,
          },
        },
      },
      where: {
        users: {
          hasEvery: [from, to],
        },
      },
    })
    console.log(from, to)
    console.log(messages)
    const msg = messages.map((message) => {
      return {
        fromSelf: message!.user!.id === from,
        message: message.message,
      }
    })
    return msg
  }
}

export default new ChatService()
