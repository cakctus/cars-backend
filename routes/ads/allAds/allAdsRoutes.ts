import { Router } from "express"
import allAdsController from "../../../controllers/ads/allAds/allAdsController"

const router: Router = Router()

router.get(
  "/get-all-ads/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllCars
)

router.get(
  "/get-all-motos/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllMotos
)

router.get(
  "/get-all-bus/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllBus
)

router.get(
  "/get-all-truck/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllTruck
)

router.get(
  "/get-all-tractor/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllTractor
)

router.get(
  "/get-all-construction/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllConstruction
)

router.get(
  "/get-all-trailer/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllTrailer
)

router.get(
  "/get-all-parts/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllParts
)

router.get(
  "/get-all-truck-parts/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllTruckParts
)

router.get(
  "/get-all-battery/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllBattery
)

router.get(
  "/get-all-wheel-tire/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllWheelTire
)

router.get(
  "/get-all-service/:userId/:page/:limit/:categoryClicked",
  allAdsController.getAllService
)

export default router
