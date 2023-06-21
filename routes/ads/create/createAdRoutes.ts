import { Router } from "express"
import createAdController from "../../../controllers/ads/create/createAdController"
import createAdPhoto from "../../../middleware/files/createAdPhotoMiddleware"
import createBusController from "../../../controllers/ads/create/createBusController"
import createTruckController from "../../../controllers/ads/create/createTruckController"
import createTractorController from "../../../controllers/ads/create/createTractorController"
import createConstructionController from "../../../controllers/ads/create/createConstructionController"
import createTrailerController from "../../../controllers/ads/create/CreateTrailerController"
import createTireController from "../../../controllers/ads/create/createTireController"
import createPartsController from "../../../controllers/ads/create/createPartsController"
import createBatteryController from "../../../controllers/ads/create/createBatteryController"
// files
import createAdMotoMiddleware from "../../../middleware/files/createAdMotoPhotoMiddleware"
import createBusPhotoMiddleware from "../../../middleware/files/createBusPhotoMiddleware"
import createTruckPhotosMiddleware from "../../../middleware/files/createTruckPhotoMiddleware"
import createTractorPhotoMiddleware from "../../../middleware/files/createTractorPhotoMiddleware"
// import createConstructionPhotoMiddleware from "../../../middleware/files/createTractorPhotoMiddleware"
import createConstructionPhotoMiddleware from "../../../middleware/files/createConstructionPhotoMiddleware"
import createTrailerPhotoMiddleware from "../../../middleware/files/createTrailerPhotoMiddleware"
import createTirePhotoMiddleware from "../../../middleware/files/creatTirePhotosMiddleware"
import createPartsPhotoMiddleware from "../../../middleware/files/createPartsPhotoMiddleware"
import createTruckPartsPhotoMiddleware from "../../../middleware/files/createTruckPartsPhotoMiddleware"
import createTruckPartsController from "../../../controllers/ads/create/createTruckPartsController"
import createBatteryPhotoMiddleware from "../../../middleware/files/createBatteryPhotoMiddleware"
import createServicePhotoMiddleware from "../../../middleware/files/createServicePhotoMiddleware"
import createServiceController from "../../../controllers/ads/create/createServiceController"

const router: Router = Router()

router.post(
  "/create-ad",
  createAdPhoto.array("files"),
  createAdController.createAd
)
router.post(
  "/create-ad-moto",
  createAdMotoMiddleware.array("files"),
  createAdController.createMotoAd
)

router.post(
  "/create-bus",
  createBusPhotoMiddleware.array("files"),
  createBusController.createBus
)

router.post(
  "/create-truck",
  createTruckPhotosMiddleware.array("files"),
  createTruckController.createTruck
)

router.post(
  "/create-tractor",
  createTractorPhotoMiddleware.array("files"),
  createTractorController.createTractor
)

router.post(
  "/create-construction",
  createConstructionPhotoMiddleware.array("files"),
  createConstructionController.createConstruction
)

router.post(
  "/create-trailer",
  createTrailerPhotoMiddleware.array("files"),
  createTrailerController.createTrailer
)

router.post(
  "/create-wheeltire",
  createTirePhotoMiddleware.array("files"),
  createTireController.createTire
)

router.post(
  "/create-parts",
  createPartsPhotoMiddleware.array("files"),
  createPartsController.createParts
)

router.post(
  "/create-truck-parts",
  createTruckPartsPhotoMiddleware.array("files"),
  createTruckPartsController.createParts
)

router.post(
  "/create-battery",
  createBatteryPhotoMiddleware.array("files"),
  createBatteryController.createBattery
)

router.post(
  "/create-service",
  createServicePhotoMiddleware.array("files"),
  createServiceController.createAd
)

export default router
