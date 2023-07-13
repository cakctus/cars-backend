import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media/pics/truck_parts")
  },
  filename: (req, file, cb) => {
    const name = file.originalname
    const fName = name.replace(/\s+/g, "_")
    cb(null, Date.now() + "." + fName)
  },
})

const limits = {
  fieldSize: 30 * 1024 * 1024, // 30MB
}

const createAdPhoto = multer({ storage, limits })

export default createAdPhoto
