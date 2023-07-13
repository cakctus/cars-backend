import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media/pics/cars")
  },
  filename: (req, file, cb) => {
    const name = file.originalname
    const fName = name.replace(/\s+/g, "_")
    cb(null, Date.now() + "." + fName)
  },
})

const createAdPhoto = multer({
  storage,
  limits: {
    fieldSize: 30 * 1024 * 1024, // 30MB (adjust the value as per your requirement)
  },
})

export default createAdPhoto
