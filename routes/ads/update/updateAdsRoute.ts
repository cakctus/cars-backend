import { Router } from "express"

import createAdPhoto from "../../../middleware/files/createAdPhotoMiddleware"

import updateAdController from "../../../controllers/ads/update/updateAdController"

const router: Router = Router()

router.post("/car", updateAdController.getCarToUpdate)

router.post(
  "/update-car",
  createAdPhoto.array("files"),
  updateAdController.updateCar
)

export default router
