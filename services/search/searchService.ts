import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

function buildWhereQuere(queryParams: any) {
  const where: any = {}

  for (const key in queryParams) {
    if (key !== "page" && key !== "limit" && key !== "sort") {
      const field = key.replace("From", "").replace("To", "") // Extract the field name

      if (key.endsWith("From")) {
        const condition = where[field] || {}
        condition.gte = queryParams[key]
        where[field] = condition
      } else if (key.endsWith("To")) {
        const condition = where[field] || {}
        condition.lte = queryParams[key]
        where[field] = condition
      } else {
        where[key] = queryParams[key]
      }
    }
  }
  return Object.keys(where).length ? where : undefined
}

class SearchService {
  async searchCarService(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.car.count({ where: buildWhereQuere(data) })
    const cars = await prisma.car.findMany({
      where: buildWhereQuere(data),
      skip,
      take: limit,
    })
    return {
      totalCount,
      cars,
      limit,
    }
  }

  async searchBus(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.busMicrobus.count({
      where: buildWhereQuere(data),
    })
    const buses = await prisma.busMicrobus.findMany({
      where: buildWhereQuere(data),
      skip,
      take: limit,
    })
    return {
      totalCount,
      buses,
      limit,
    }
  }

  async searchTruck(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.truck.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.truck.findMany({
      where: buildWhereQuere(data),
      skip,
      take: limit,
    })
    return {
      totalCount,
      car,
      limit,
    }
  }
}

export default new SearchService()
