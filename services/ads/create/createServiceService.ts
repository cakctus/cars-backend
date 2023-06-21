import { PrismaClient } from "@prisma/client"
import ApiError from "../../../exceptions/apiError"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

class createServiceService {
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
      price,
      currency,
      contacts,
      serviceArray,
      repairArray,
    } = carData
    const { serviceCategory } = carData
    const { repairCategory } = carData

    const selectedServices = serviceCategory.filter((_: any, index: any) =>
      serviceArray.includes(index)
    )

    const selectedRepair = repairCategory.filter((_: any, index: any) =>
      repairArray.includes(index)
    )

    console.log(carData)

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

    const service = await prisma.service.create({
      data: {
        serviceForCars: serviceArray.includes(1),
        serviceForMinibuses: serviceArray.includes(2),
        serviceForBuses: serviceArray.includes(3),
        serviceForTrucks: serviceArray.includes(4),
        serviceForSpecial: serviceArray.includes(5),
        serviceForAgricultural: serviceArray.includes(6),
      },
    })

    const repair = await prisma.repair.create({
      data: {
        repairEngine: repairArray.includes(1),
        repairElectrical: repairArray.includes(2),
        repairBodyFrames: repairArray.includes(3),
        repairSuspension: repairArray.includes(4),
        repairChassis: repairArray.includes(5),
        repairTransmission: repairArray.includes(6),
        repairManagementSystems: repairArray.includes(7),
        repairSafetySystems: repairArray.includes(8),
        repairAlarmSystems: repairArray.includes(9),
        repairPainting: repairArray.includes(10),
        repairBodyAlignment: repairArray.includes(11),
        repairAirConditioning: repairArray.includes(12),
        repairDetailing: repairArray.includes(13),
        repairGlassOptics: repairArray.includes(14),
      },
    })

    const created = await prisma.autoService.create({
      data: {
        uuid: uuidv4(),
        title,
        description,
        region,
        price,
        currency,
        contacts,
        photo,
        Service: {
          connect: {
            id: service.id,
          },
        },
        Repair: {
          connect: {
            id: repair.id,
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

export default new createServiceService()
