import { Router } from "express"
import searchController from "../../controllers/search/searchController"

const router: Router = Router()

router.post("/cars", searchController.searchCars)

router.post("/buses", searchController.searchBuses)

router.post("/truck", searchController.searchTruck)

export default router
