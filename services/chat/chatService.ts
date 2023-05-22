import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class ChatService {
  async addIdService(myId: number, id: number) {
    const chat = await prisma.chat.create({
      data: {
        myId: myId,
        oponentId: id,
        usersId: [myId, id],
        user: {
          connect: {
            id: id,
          },
        },
      },
    })
    return chat
  }

  async myChatsService(myId: number, userId: number) {
    // owner
    const chats = await prisma.chat.findMany({
      where: {
        myId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: false,
          },
        },
      },
    })
    const c = chats.map((chat) => chat.user)

    // oponent
    const chatsOponent = await prisma.chat.findMany({
      where: {
        oponentId: myId,
      },
    })
    const arrayOfChats = chatsOponent.map((chat) => chat.myId)
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: arrayOfChats,
          notIn: myId,
        },
      },
    })

    const finalArray = [...c, ...users]

    const uniqueData = finalArray.reduce((acc: any, obj: any) => {
      const found = acc.find((item: any) => item.id === obj.id)
      if (!found) {
        acc.push(obj)
      }
      return acc
    }, [])

    return uniqueData

    // return {
    //   owner: c,
    //   oponent: users,
    // }

    // if (isNaN(userId)) {
    //   // if (chatsOponent) {
    //   return users
    //   // }
    // }
    // return c
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
          // hasEvery: [from],
        },
      },
    })
    // console.log(from, to)
    // console.log(messages)
    const msg = messages.map((message) => {
      return {
        fromSelf: message!.user!.id === from,
        message: message.message,
        id: message.id,
        createdAt: message.createdAt,
        read: message.read,
      }
    })
    return msg
  }
}

export default new ChatService()
