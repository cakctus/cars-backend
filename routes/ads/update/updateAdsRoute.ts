import { Router } from "express"

import createAdPhoto from "../../../middleware/files/createAdPhotoMiddleware"
import updateBusPhotoMiddleware from "../../../middleware/files/createBusPhotoMiddleware"
import createTruckPhotoMiddleware from "../../../middleware/files/createTruckPhotoMiddleware"
import createMotoPhotoMiddleware from "../../../middleware/files/createAdMotoPhotoMiddleware"
import createTractorPhotoMiddleware from "../../../middleware/files/createTractorPhotoMiddleware"
import createTrailerPhotoMiddleware from "../../../middleware/files/createTrailerPhotoMiddleware"
import createConstructionPhotoMiddleware from "../../../middleware/files/createConstructionPhotoMiddleware"
import createTirePhotoMiddleware from "../../../middleware/files/creatTirePhotosMiddleware"
import createPartsPhotoMiddleware from "../../../middleware/files/createPartsPhotoMiddleware"
import createTruckPartsPhotoMiddleware from "../../../middleware/files/createTruckPartsPhotoMiddleware"
import createBatteryPhotoMiddleware from "../../../middleware/files/createBatteryPhotoMiddleware"
import createServicePhotoMiddleware from "../../../middleware/files/createServicePhotoMiddleware"

import updateAdController from "../../../controllers/ads/update/updateAdController"

import FilesMiddleware from "../../../middleware/file-error/filesMiddleware"

const router: Router = Router()

router.post("/car", updateAdController.getCarToUpdate)

router.post(
  "/update-car",
  createAdPhoto.array("files"),
  FilesMiddleware.checkLengthFiles("cars"),
  updateAdController.updateCar
)

router.post("/bus", updateAdController.getBusToUpdate)

router.post(
  "/update-bus",
  updateBusPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("bus"),
  updateAdController.updateBus
)

router.post("/truck", updateAdController.getTruckToUpdate)

router.post(
  "/update-truck",
  createTruckPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("truck"),
  updateAdController.updateTruck
)

router.post("/moto", updateAdController.getMotoToUpdate)

router.post(
  "/update-moto",
  createMotoPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("moto"),
  updateAdController.updateMoto
)

router.post("/tractor", updateAdController.getTractorToUpdate)

router.post(
  "/update-tractor",
  createTractorPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("tractor"),
  updateAdController.updateTractor
)

router.post("/trailer", updateAdController.getTrailerToUpdate)

router.post(
  "/update-trailer",
  createTrailerPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("trailer"),
  updateAdController.updateTrailer
)

router.post("/construction", updateAdController.getConstructionToUpdate)

router.post(
  "/update-construction",
  createConstructionPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("construction"),
  updateAdController.updateConstruction
)

router.post("/wheel-tire", updateAdController.getWheelTireToUpdate)

router.post(
  "/update-wheel-tire",
  createTirePhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("tire"),
  updateAdController.updateWheelTire
)

router.post("/car-parts", updateAdController.getCarPartsToUpdate)

router.post(
  "/update-car-parts",
  createPartsPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("parts"),
  updateAdController.updateCarParts
)

router.post("/truck-parts", updateAdController.getTruckPartsToUpdate)

router.post(
  "/update-truck-parts",
  createTruckPartsPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("truck_parts"),
  updateAdController.updateTruckParts
)

router.post("/battery", updateAdController.getBatteryToUpdate)

router.post(
  "/update-battery",
  createBatteryPhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("battery"),
  updateAdController.updateBattery
)

router.post("/service", updateAdController.getServiceToUpdate)

router.post(
  "/update-service",
  createServicePhotoMiddleware.array("files"),
  FilesMiddleware.checkLengthFiles("service"),
  updateAdController.updateService
)

export default router
