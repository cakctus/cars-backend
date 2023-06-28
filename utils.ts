function buildWhereQuereService(queryParams: any) {
  const where: any = {}
  const { serviceArray } = queryParams
  const { repairArray } = queryParams

  const repairFields = [
    "repairEngine",
    "repairChassis",
    "repairSafetySystems",
    "repairSuspension",
    "repairBodyAlignment",
    "repairGlassOptics",
    "repairElectrical",
    "repairTransmission",
    "repairAlarmSystems",
    "repairAirConditioning",
    "repairBodyFrames",
    "repairManagementSystems",
    "repairPainting",
    "repairDetailing",
  ]

  const serviceFields = [
    "serviceForCars",
    "serviceForTrucks",
    "serviceForAgricultural",
    "serviceForMinibuses",
    "serviceForBuses",
    "serviceForSpecial",
  ]

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
      } else if (key === "repairArray") {
        const repairConditions = repairArray
          .map((value: boolean, index: number) =>
            value ? { [repairFields[index]]: true } : null
          )
          .filter((value: any) => value !== null)
        if (repairConditions.length > 0) {
          where["Repair"] = {
            AND: repairConditions,
          }
        }
      } else if (key === "serviceArray") {
        const serviceConditions = serviceArray
          .map((value: boolean, index: number) =>
            value ? { [serviceFields[index]]: true } : null
          )
          .filter((value: any) => value !== null)
        if (serviceConditions.length > 0) {
          where["Service"] = {
            AND: serviceConditions,
          }
        }
      } else {
        where[key] = queryParams[key]
      }
    }
  }

  return Object.keys(where).length ? where : undefined
}
