import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"
import mailService from "../mail/mailService"
import tokenService from "../token/tokenService"
import ApiError from "../../exceptions/apiError"
import UserDto from "../../dto/userDto"

const prisma = new PrismaClient()

class AuthService {
  async reg(email: string, role: string, password: string | Buffer) {
    // check if user already exists
    const candidate = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    // if user exists
    if (candidate) {
      throw ApiError.BadRequest(`A user with email: ${email} already exists`)
    }
    // create user
    const hash = await bcrypt.hash(password, 3)
    const activationLink = uuidv4()
    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
        activationLink,
        dateJoined: new Date(),
        role: role,
      },
    })
    // user dto
    const userDto = new UserDto(user.email, user.id, user.isActivated)
    const obj = {
      userId: user.id,
      email: user.email,
      isActivated: user.isActivated,
      accessToken: "",
      refreshToken: "",
      dateJoined: user.dateJoined,
      userPhoto: user.userPhoto,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      isStaff: user.isStaff,

      set setAccesToken(value: string) {
        this.accessToken = value
      },

      set setRefreshToken(value: string) {
        this.refreshToken = value
      },
    }
    // generate token
    const tokens = await tokenService.generateToken({ ...obj })
    obj.setAccesToken = tokens.accesToken
    obj.setRefreshToken = tokens.refreshToken
    await tokenService.saveToken(obj.userId, obj.refreshToken)
    // send a email with verify
    // await mailService.mailService(
    //   email,
    //   `http://localhost:5000/api/activate/${activationLink}`
    // )

    return {
      ...obj,
    }
  }

  async activate(link: string) {
    const user = await prisma.user.findFirst({
      where: {
        activationLink: link,
      },
    })
    // check link
    if (!user) {
      throw ApiError.BadRequest("This user does not exist")
    }
    // update isActivated
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        isActivated: true,
      },
    })
  }

  async login(email: string, password: string | Buffer) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    // check if user exists
    if (!user) {
      throw ApiError.BadRequest(`User with ${email} email does not exist`)
    }
    const isPassEqual = await bcrypt.compare(password, user.password)
    // check pass
    if (!isPassEqual) {
      throw ApiError.BadRequest("Password is not correct")
    }

    const userDto = new UserDto(user.email, user.id, user.isActivated)
    const obj = {
      userId: user.id,
      email: user.email,
      isActivated: user.isActivated,
      accessToken: "",
      refreshToken: "",
      dateJoined: user.dateJoined,
      userPhoto: user.userPhoto,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      isStaff: user.isStaff,

      set setAccesToken(value: string) {
        this.accessToken = value
      },

      set setRefreshToken(value: string) {
        this.refreshToken = value
      },
    }
    // generate token
    const tokens = await tokenService.generateToken({ ...obj })
    obj.setAccesToken = tokens.accesToken
    obj.setRefreshToken = tokens.refreshToken
    await tokenService.saveToken(obj.userId, obj.refreshToken)

    return {
      ...obj,
    }
  }

  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) throw ApiError.UnauthorizedError()

    const userToken = await tokenService.findToken(refreshToken)
    const validateToken = await tokenService.validateRefreshToken(refreshToken)

    // check if token in db and is valid
    // if (!userToken) throw ApiError.UnauthorizedError()
    if (!validateToken) throw ApiError.UnauthorizedError()
    const user = await prisma.user.findUnique({
      where: {
        id: validateToken!.userId,
      },
    })

    const userDto = new UserDto(user!.email, user!.id, user!.isActivated)
    const obj = {
      userId: user!.id,
      email: user!.email,
      isActivated: user!.isActivated,
      accessToken: "",
      refreshToken: "",
      dateJoined: user!.dateJoined,
      userPhoto: user!.userPhoto,
      username: user!.username,
      firstName: user!.firstName,
      lastName: user!.lastName,
      isStaff: user!.isStaff,

      set setAccesToken(value: string) {
        this.accessToken = value
      },

      set setRefreshToken(value: string) {
        this.refreshToken = value
      },
    }
    // generate token
    const tokens = await tokenService.generateToken({ ...obj })
    obj.setAccesToken = tokens.accesToken
    obj.setRefreshToken = tokens.refreshToken

    return {
      ...obj,
    }
  }

  async getUsers() {
    const users = await prisma.user.findMany()

    if (users) {
      return users
    }

    return []
  }
}

export default new AuthService()
