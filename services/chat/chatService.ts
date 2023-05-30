import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class ChatService {
  async addIdService(myId: number, id: number) {
    const chats1 = await prisma.chat.findMany({
      where: {
        usersId: {
          hasEvery: [myId, id],
        },
      },
    })

    const chats2 = await prisma.chat.findMany({
      where: {
        usersId: {
          hasEvery: [id, myId],
        },
      },
    })
    if (chats1.length && chats2.length) {
      const updateChat1 = await prisma.chat.updateMany({
        where: {
          myId,
        },
        data: {
          myId: myId,
          oponentId: id,
          usersId: [myId, id],
          userId: id,
        },
      })
      const updateChat2 = await prisma.chat.updateMany({
        where: {
          id,
        },
        data: {
          myId: id,
          oponentId: id,
          usersId: [id, myId],
          userId: myId,
        },
      })
      return {
        updateChat1,
        updateChat2,
      }
    }
    if (!chats1.length && !chats2.length) {
      const createChat = await prisma.chat.create({
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

      const createChat2 = await prisma.chat.create({
        data: {
          myId: id,
          oponentId: myId,
          usersId: [id, myId],
          user: {
            connect: {
              id: myId,
            },
          },
        },
      })
      return {
        createChat,
        createChat2,
      }
    }
  }

  async chatIsReadService(myId: number, oponentId: number) {
    // const chats = await prisma.chat.findMany({
    //   where: {
    //     usersId: {
    //       hasEvery: [myId, oponentId],
    //     },
    //   },
    // })
    // const chats = await prisma.chat.findMany({
    //   where: {
    //     // usersId: {
    //     //   hasSome: [myId, oponentId],
    //     // },
    //     oponentId,
    //   },
    // })
    // if (chats.length) {
    const updateChat = await prisma.chat.updateMany({
      where: {
        usersId: {
          hasEvery: [myId, oponentId],
        },
        userId: myId,
      },
      // where: {
      //   AND: [
      //     {
      //       usersId: {
      //         hasEvery: [myId, oponentId],
      //       },
      //     },
      //     {
      //       myId,
      //     },
      //   ],
      // },
      data: {
        oponentReadChat: true,
      },
    })

    return updateChat
    // }
  }

  async chatIsUnreadService(myId: number, oponentId: number) {
    const updateChat = await prisma.chat.updateMany({
      where: {
        usersId: {
          hasEvery: [oponentId, myId],
        },
        userId: oponentId,
      },

      data: {
        oponentReadChat: false,
      },
    })

    return updateChat
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
    // const c = chats.map((chat) => chat.user)
    const c = chats.map((chat) => ({
      id: chat!.user!.id,
      email: chat!.user!.email,
      oponentReadChat: chat.oponentReadChat,
    }))
    const usersId = chats.map((chat) => Number(chat.oponentId))

    const lastMessages = await prisma.message.findMany({
      where: {
        users: {
          hasSome: usersId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      distinct: ["users"], // Use distinct instead of groupBy
      select: {
        id: true,
        message: true,
        users: true,
        user: true,
        userId: true,
        createdAt: true,
        read: true,
      },
    })

    // console.log(c, "c")
    // console.log(c, "cc")
    // console.log(usersId)
    // console.log(lastMessages)
    // console.log(ownerMsg, "ownerMsg")

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

    // console.log(finalArray)
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
