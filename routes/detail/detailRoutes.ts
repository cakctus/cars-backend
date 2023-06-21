import { Router } from "express"

const router: Router = Router()

import detailController from "../../controllers/detail/detailController"

router.get("/car/:id", detailController.getCar)
router.get("/bus/:id", detailController.getBus)
router.get("/truck/:id", detailController.getTruck)
router.get("/moto/:id", detailController.getMoto)
router.get("/tractor/:id", detailController.getTractor)
router.get("/trailer/:id", detailController.getTrailer)
router.get("/construction/:id", detailController.getConstruction)
router.get("/disc-tire/:id", detailController.getDiscTire)
router.get("/part/:id", detailController.getPart)
router.get("/truck-part/:id", detailController.getTruckPart)
router.get("/battery/:id", detailController.getBattery)
router.get("/service/:id", detailController.getService)

export default router
