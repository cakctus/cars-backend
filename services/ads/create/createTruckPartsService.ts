import { PrismaClient } from "@prisma/client"
import ApiError from "../../../exceptions/apiError"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

class CreateTruckPartsService {
  async createAd(
    id: any,
    carData: any,
    files: any,
    comunicationMethod: any,
    number: any
  ) {
    const {
      title,
      description,
      region,
      partsCategory,
      price,
      currency,
      brand,
      partsCondition,
      contacts,
    } = carData

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    })

    if (user) {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          comunicationMethod,
        },
      })
    }

    const { countryCode } = carData

    if (number) {
      const checkNumber = await prisma.number.findFirst({
        where: {
          number,
        },
      })
      if (checkNumber) {
        throw ApiError.NumberAlreadyExists("Number already exists")
      } else {
        await prisma.number.create({
          data: {
            number,
            User: {
              connect: {
                id,
              },
            },
          },
        })
        if (countryCode) {
          await prisma.user.update({
            where: {
              id,
            },
            data: {
              countryCode,
            },
          })
        }
      }
    }

    const photo = files.map((file: any) => {
      return file.filename
    })

    const created = await prisma.truckParts.create({
      data: {
        uuid: uuidv4(),
        title,
        description,
        region,
        partsCategory,
        price,
        currency,
        brand,
        partsCondition,
        contacts,
        photo,
        User: {
          connect: {
            id,
          },
        },
      },
    })
    return created
  }
}

export default new CreateTruckPartsService()