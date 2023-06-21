import { Router } from "express"
import getAd from "../../../controllers/ads/get/getAd"

const router: Router = Router()

router.get("/:url/:uuid", getAd.getAd)

export default router
