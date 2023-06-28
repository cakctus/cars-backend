import { PrismaClient } from "@prisma/client"
import ApiError from "../../exceptions/apiError"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

class CreateAdService {
  async createAd(
    id: any,
    carData: any,
    files: any,
    comunicationMethod: any,
    number: any
  ) {
    const {
      brand,
      model,
      generation,
      modification,
      registration,
      condition,
      description,
      region,
      price,
      currency,
      author,
      year,
      seats,
      steering,
      bodyType,
      doors,
      mileage,
      mileageType,
      engineVolume,
      enginePower,
      fuelType,
      transmission,
      drive,
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

    const createdCar = await prisma.car.create({
      data: {
        uuid: uuidv4(),
        brand: String(brand),
        model,
        registration,
        generation,
        modification,
        condition,
        description,
        region,
        price,
        currency,
        author,
        year,
        seats,
        steering,
        bodyType,
        doors,
        mileage,
        mileageType,
        engineVolume,
        enginePower,
        fuelType,
        transmission,
        photo,
        drive,
        contacts,
        User: {
          connect: {
            id,
          },
        },
      },
    })

    return createdCar
  }

  async createMotoAdService(
    id: any,
    carData: any,
    files: any,
    comunicationMethod: any,
    number: any
  ) {
    const {
      brand,
      model,
      registration,
      condition,
      description,
      region,
      price,
      currency,
      motorcycleType,
      year,
      engineVolume,
      mileage,
      mileageType,
      enginePower,
      motorcycleTransmission,
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

    const createdCar = await prisma.moto.create({
      data: {
        uuid: uuidv4(),
        brand,
        model,
        registration,
        motorcycleType,
        condition,
        description,
        region,
        price,
        currency,
        year,
        mileage,
        mileageType,
        engineVolume,
        enginePower,
        motorcycleTransmission,
        photo,
        contacts,
        User: {
          connect: {
            id,
          },
        },
      },
    })
    return createdCar
  }
}

export default new CreateAdService()
