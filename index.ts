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

const PORT = process.env.PORT || 5000
const prisma = new PrismaClient()

const app = express()

// middleware
app.use(express.json())
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
