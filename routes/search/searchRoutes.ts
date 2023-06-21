import { Router } from "express"
import searchController from "../../controllers/search/searchController"

const router: Router = Router()

router.post("/cars", searchController.searchCars)

export default router
