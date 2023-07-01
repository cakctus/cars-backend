// dotenv
import * as dotenv from "dotenv"
dotenv.config()
// express
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// prisma
import { PrismaClient } from "@prisma/client"
// middleware
import errorMiddleware from "./middleware/errors/errorMiddleware"
// routes
import authRoutes from "./routes/auth/authRouter"
import chatRoutes from "./routes/chat/chatRoutes"
import profileRoutes from "./routes/profile/profileRoutes"
import createAdController from "./routes/ads/create/createAdRoutes"
import getAd from "./routes/ads/get/getAd"
import detailRoutes from "./routes/detail/detailRoutes"
import searchRoutes from "./routes/search/searchRoutes"
import allAdsRoutes from "./routes/ads/allAds/allAdsRoutes"
import updateAdsRoutes from "./routes/ads/update/updateAdsRoute"

// socket.io
import { Server } from "socket.io"
// http
import { createServer } from "http"

const PORT = process.env.PORT || 5000
const prisma = new PrismaClient()

const app = express()
const server = createServer(app)

// middleware
app.use(express.json())
app.use("/media", express.static("media"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
)
// routes
app.use("/api", authRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/create", createAdController)
app.use("/api/created", getAd)
app.use("/api/detail", detailRoutes)
app.use("/api/search", searchRoutes)
app.use("/api", allAdsRoutes)
app.use("/api/update", updateAdsRoutes)
app.use(errorMiddleware)

const start = async () => {
  try {
    await prisma.$connect
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// server.listen(5001, () => {
//   console.log("server is running")
// })

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   },
// })

// // @ts-ignore
// global.onlineUsers = new Map()

// io.on("connection", (socket) => {
//   // @ts-ignore
//   global.chatSocket = socket
//   socket.on("add-user", (userId) => {
//     // @ts-ignore
//     onlineUsers.set(userId, socket.id)
//   })

//   socket.on("send-msg", (data) => {
//     console.log("send msg", data)
//     // @ts-ignore
//     const sendUserSocket = onlineUsers.get(data.to)
//     console.log(sendUserSocket)
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("msg-receive", data.message)
//       console.log(data, "receive")
//     }
//   })
// })

// @ts-ignore
// console.log(onlineUsers)
