import { Router } from "express"
import authController from "../../controllers/auth/authController"
import AuthMiddleware from "../../middleware/auth/authMiddleware"

const router: Router = Router()

router.post("/reg", authController.reg)
router.post("/login", authController.login)
router.post("/logout", authController.logout)
router.get("/activate/:link", authController.activate)
router.get("/refresh", authController.refresh)
router.get("/users", AuthMiddleware.checkAuth, authController.users)

export default router
