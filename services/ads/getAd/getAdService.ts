import { PrismaClient } from "@prisma/client"
import ApiError from "../../../exceptions/apiError"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

class getAdService {
  async getAd(url: any, uuidi: any) {
    console.log(url, uuidi)
  }
}

export default new getAdService()
