import { Router } from "express"
import createBusController from "../../../controllers/ads/create/createBusController"
import createBusPhotoMiddleware from "../../../middleware/files/createBusPhotoMiddleware"

const router: Router = Router()

router.post(
  "/create-bus",
  createBusPhotoMiddleware.array("files"),
  createBusController.createBus
)

export default router
