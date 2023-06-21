import { PrismaClient } from "@prisma/client"
import ApiError from "../../../exceptions/apiError"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

class CreateTruckService {
  async createAd(
    id: any,
    carData: any,
    files: any,
    comunicationMethod: any,
    number: any
  ) {
    const {
      wheelTireTypes,
      purpose,
      title,
      description,
      region,
      price,
      currency,
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

    const disc = await prisma.disc.create({
      data: {
        discType: carData.disc.discType,
        diameter: carData.disc.diameter,
        holeCount: carData.disc.holeCount,
        brand: carData.disc.brand,
      },
    })

    const tire = await prisma.tire.create({
      data: {
        diameter: carData.tire.diameter,
        profileHeight: carData.tire.profileHeight,
        profileWidth: carData.tire.profileWidth,
        season: carData.tire.season,
        condition: carData.tire.condition,
        brand: carData.tire.brand,
      },
    })

    const created = await prisma.wheelsTire.create({
      data: {
        uuid: uuidv4(),
        wheelTireTypes,
        purpose,
        title,
        description,
        region,
        price,
        currency,
        contacts,
        photo,
        disc: {
          connect: {
            id: disc.id,
          },
        },
        tire: {
          connect: {
            id: tire.id,
          },
        },
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

export default new CreateTruckService()
