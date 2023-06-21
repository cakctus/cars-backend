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
    }
  }
}

export default new SearchService()
