import { Router } from "express"
import searchController from "../../controllers/search/searchController"

const router: Router = Router()

router.post("/cars", searchController.searchCars)

router.post("/buses", searchController.searchBuses)

router.post("/truck", searchController.searchTruck)

router.post("/moto", searchController.searchMoto)

router.post("/tractor", searchController.searchTractor)

router.post("/trailer", searchController.searchTrailer)

router.post("/construction", searchController.searchConstruction)

router.post("/wheel-tire", searchController.searchWheelTire)

router.post("/parts", searchController.searchParts)

router.post("/truck-parts", searchController.searchTruckParts)

router.post("/battery", searchController.searchBattery)

router.post("/service", searchController.searchService)

export default router
