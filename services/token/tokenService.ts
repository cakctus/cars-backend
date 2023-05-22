import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface Payload {
  userId?: number
  email?: string
  isActivated?: boolean
  accessToken?: string
  refreshToken?: string
  dateJoined?: any
  userPhoto?: string
  username?: any
  firstName?: any
  lastName?: any
  isStaff?: any
}

interface JwtPayload {
  userId: number
}

class TokenService {
  async generateToken(payload: Payload) {
    const accesToken = jwt.sign(payload, "secret", {
      expiresIn: "15m",
    })
    const refreshToken = jwt.sign(payload, "secret", {
      expiresIn: "15d",
    })
    return {
      accesToken,
      refreshToken,
    }
  }

  async validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, "secret") as JwtPayload
      return userData
    } catch (error) {
      return null
    }
  }

  async validateAccesToken(token: string) {
    try {
      const userData = jwt.verify(token, "string")
      // console.log(userData, "D")
      return userData
    } catch (error) {
      return null
    }
  }

  async saveToken(id: number, refreshToken: string) {
    const tokenData = await prisma.token.findFirst({
      where: {
        userId: id,
      },
    })
    // check if token exists
    if (tokenData) {
      const token = await prisma.token.update({
        where: {
          id: tokenData.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      })
      return token
    }
    // save token
    const token = await prisma.token.create({
      data: {
        userId: id,
        refreshToken: refreshToken,
      },
    })
    return token
  }

  async removeToken(refreshToken: string) {
    // find token
    const t = await prisma.token.findUnique({
      where: {
        refreshToken: refreshToken,
      },
    })

    if (t) {
      const token = await prisma.token.delete({
        where: {
          id: t.id,
        },
      })
      return token
    }
    // delete token
    // const token = await prisma.token.delete({
    //   where: {
    //     id: t?.id,
    //   },
    // })
    // return token
  }

  async findToken(refreshToken: string) {
    const token = await prisma.token.findFirst({
      where: {
        refreshToken: refreshToken,
      },
    })
    return token
  }
}

export default new TokenService()
