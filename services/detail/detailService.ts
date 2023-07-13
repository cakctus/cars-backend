import { PrismaClient } from "@prisma/client"
import ApiError from "../../exceptions/apiError"

const prisma = new PrismaClient()

class DetailService {
  async getCar(id: any) {
    const car = await prisma.car.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!car)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return car
  }

  async getBus(id: any) {
    const bus = await prisma.busMicrobus.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!bus)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return bus
  }

  async getTruck(id: any) {
    const truck = await prisma.truck.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!truck)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return truck
  }

  async getMoto(id: any) {
    const moto = await prisma.moto.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!moto)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return moto
  }

  async getTractor(id: any) {
    const truck = await prisma.agriculture.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!truck)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return truck
  }

  async getTrailer(id: any) {
    const trailer = await prisma.trailer.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getConstruction(id: any) {
    const construction = await prisma.construction.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!construction)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return construction
  }

  async getDiscTire(id: any) {
    const trailer = await prisma.wheelsTire.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
        tire: true,
        disc: true,
      },
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getPart(id: any) {
    const carParts = await prisma.carParts.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })
    if (!carParts)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return carParts
  }

  async getTruckPart(id: any) {
    const trailer = await prisma.truckParts.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })

    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getBattery(id: any) {
    const batteries = await prisma.batteries.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
      },
    })
    if (!batteries)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return batteries
  }

  async getService(id: any) {
    const autoService = await prisma.autoService.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        User: {
          select: {
            id: true,
            dateJoined: true,
            userPhoto: true,
            comunicationMethod: true,
            countryCode: true,
            email: true,
          },
        },
        Service: true,
        Repair: true,
        title: true,
        description: true,
        region: true,
        price: true,
        currency: true,
        photo: true,
        contacts: true,
        createdAt: true,
      },
    })
    if (!autoService)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return autoService
  }
}

export default new DetailService()
