import { PrismaClient } from "@prisma/client"
import ApiError from "../../exceptions/apiError"

const prisma = new PrismaClient()

class DetailService {
  async getCar(id: any) {
    const car = await prisma.car.findFirst({
      where: {
        id: Number(id),
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
    })
    if (!truck)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return truck
  }

  async getMoto(id: any) {
    const truck = await prisma.moto.findFirst({
      where: {
        id: Number(id),
      },
    })
    if (!truck)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return truck
  }

  async getTractor(id: any) {
    const truck = await prisma.agriculture.findFirst({
      where: {
        id: Number(id),
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
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getConstruction(id: any) {
    const trailer = await prisma.construction.findFirst({
      where: {
        id: Number(id),
      },
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getDiscTire(id: any) {
    const trailer = await prisma.wheelsTire.findFirst({
      where: {
        id: Number(id),
      },
      include: {
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
    const trailer = await prisma.carParts.findFirst({
      where: {
        id: Number(id),
      },
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getTruckPart(id: any) {
    const trailer = await prisma.truckParts.findFirst({
      where: {
        id: Number(id),
      },
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getBattery(id: any) {
    const trailer = await prisma.batteries.findFirst({
      where: {
        id: Number(id),
      },
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }

  async getService(id: any) {
    const trailer = await prisma.autoService.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        Service: true,
        Repair: true,
        title: true,
        description: true,
        region: true,
        price: true,
        currency: true,
        photo: true,
        contacts: true,
      },
    })
    if (!trailer)
      throw ApiError.DoesNotExist(
        "Oops! It looks like the page you were trying to reach does not exist."
      )
    return trailer
  }
}

export default new DetailService()
