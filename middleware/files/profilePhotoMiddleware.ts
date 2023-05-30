import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media/profile/users")
  },
  filename: (req, file, cb) => {
    const name = file.originalname
    const fName = name.replace(/\s+/g, "_")
    cb(null, Date.now() + "." + fName)
  },
})

const userPhotos = multer({ storage })

export default userPhotos
