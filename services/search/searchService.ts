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

function buildWhereQuereObject(queryParams: any) {
  const where: any = {}
  const { tire } = queryParams
  const { disc } = queryParams

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
      } else if (key === "tire") {
        where[key] = tire
      } else if (key === "disc") {
        where[key] = disc
      } else {
        where[key] = queryParams[key]
      }
    }
  }

  return Object.keys(where).length ? where : undefined
}

function buildWhereQuereService(queryParams: any) {
  const where: any = {}
  const { serviceArray, repairArray } = queryParams

  const repairFields = [
    "repairEngine",
    "repairElectrical",
    "repairBodyFrames",
    "repairSuspension",
    "repairChassis",
    "repairTransmission",
    "repairManagementSystems",
    "repairSafetySystems",
    "repairAlarmSystems",
    "repairPainting",
    "repairBodyAlignment",
    "repairAirConditioning",
    "repairDetailing",
    "repairGlassOptics",
  ]

  const serviceFields = [
    "serviceForCars",
    "serviceForMinibuses",
    "serviceForBuses",
    "serviceForTrucks",
    "serviceForSpecial",
    "serviceForAgricultural",
  ]

  const repairConditions = repairFields.reduce(
    (conditions: any[], repairField, index) => {
      if (repairArray && repairArray.includes(index + 1)) {
        conditions.push({ [repairField]: true })
      }
      return conditions
    },
    []
  )

  if (repairConditions.length > 0) {
    where["Repair"] = {
      OR: repairConditions,
    }
  }

  const serviceConditions = serviceFields.reduce(
    (conditions: any[], serviceField, index) => {
      if (serviceArray && serviceArray.includes(index + 1)) {
        conditions.push({ [serviceField]: true })
      }
      return conditions
    },
    []
  )

  if (serviceConditions.length > 0) {
    where["Service"] = {
      OR: serviceConditions,
    }
  }

  for (const key in queryParams) {
    if (
      key !== "page" &&
      key !== "limit" &&
      key !== "sort" &&
      !["serviceArray", "repairArray"].includes(key)
    ) {
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
        where[field] = queryParams[key]
      }
    }
  }

  return where
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

  async searchMoto(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.moto.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.moto.findMany({
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

  async searchTractor(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.agriculture.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.agriculture.findMany({
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

  async searchTrailer(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.trailer.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.trailer.findMany({
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

  async searchConstruction(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.construction.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.construction.findMany({
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

  async searchWheelTire(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.wheelsTire.count({
      where: buildWhereQuereObject(data),
    })
    const car = await prisma.wheelsTire.findMany({
      where: buildWhereQuereObject(data),
      skip,
      take: limit,
    })

    return {
      totalCount,
      car,
      limit,
    }
  }

  async searchParts(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.carParts.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.carParts.findMany({
      where: buildWhereQuereObject(data),
      skip,
      take: limit,
    })

    return {
      totalCount,
      car,
      limit,
    }
  }

  async searchTruckParts(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.truckParts.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.truckParts.findMany({
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

  async searchBattery(data: any, page: any, limit: any) {
    const skip = (page - 1) * limit
    const totalCount = await prisma.batteries.count({
      where: buildWhereQuere(data),
    })
    const car = await prisma.batteries.findMany({
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

  async searchService(data: any, page: any, limit: any) {
    const skip = (parseInt(page) - 1) * parseInt(limit)
    console.log(page)
    const totalCount = await prisma.autoService.count({
      where: buildWhereQuereService(data),
    })
    const car = await prisma.autoService.findMany({
      where: buildWhereQuereService(data),
      skip: skip ? skip : 0,
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
