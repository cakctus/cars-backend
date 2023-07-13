import { RequestHandler, NextFunction, Response } from "express"
import ApiError from "../../exceptions/apiError"
import path from "path"
import fs from "fs"

class FileMiddleware {
  checkLengthFiles: (url: string) => RequestHandler<any, any, any, any> = (
    url: string
  ) => {
    return (req: any, res: Response, next: NextFunction) => {
      try {
        const files = req.files
        console.log(files)
        if (files.length > 35) {
          try {
            const prevPhotoPaths = req.files.map((item: any) =>
              path.join(`media/pics/${url}`, item.filename)
            )

            prevPhotoPaths.forEach((prevPhotoPath: any) => {
              try {
                fs.unlinkSync(prevPhotoPath)
              } catch (error: any) {
                console.log(error.message)
                return next(error)
              }
            })
          } catch (error) {
            console.log(error)
            return next(error)
          }
        }

        next()
      } catch (error) {
        next(error)
      }
    }
  }
}

export default new FileMiddleware()
