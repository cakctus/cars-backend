import { Router } from "express"
import profileControllers from "../../controllers/profile/profileControllers"
import userPhotos from "../../middleware/files/profilePhotoMiddleware"

const router: Router = Router()

router.get("/countries", profileControllers.countriesCodes)
router.post(
  "/user-dto",
  userPhotos.fields([
    { name: "userPhoto", maxCount: 1 },
    { name: "userProfilePhoto", maxCount: 1 },
  ]),
  profileControllers.userDtoUpdate
)
router.post(
  "/user-photo",
  userPhotos.single("userPhoto"),
  profileControllers.updateUserPhoto
)
router.post(
  "/user-profile-photo",
  userPhotos.single("userProfilePhoto"),
  profileControllers.updateUserProfilePhoto
)
router.post("/update-user-contacts", profileControllers.updateUserContacts)
router.post("/add-phone", profileControllers.addPhone)
router.post("/delete-phone", profileControllers.deletePhone)

export default router
