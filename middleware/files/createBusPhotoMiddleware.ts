import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media/pics/bus")
  },
  filename: (req, file, cb) => {
    const name = file.originalname
    const fName = name.replace(/\s+/g, "_")
    cb(null, Date.now() + "." + fName)
  },
})

const createAdPhoto = multer({ storage })

export default createAdPhoto
