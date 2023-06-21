import { Request, Response, NextFunction } from "express"
import createTractorService from "../../../services/ads/create/createTractorService"

class CreateTractorController {
  async createTractor(req: Request, res: Response, next: NextFunction) {
    try {
      const data = JSON.parse(req.body.data)
      const files = req.files
      const communicationMethod = JSON.parse(req.body.communicationMethod)
      const number = JSON.parse(req.body.number)
      const id = JSON.parse(req.body.id)
      const response = await createTractorService.createAd(
        id,
        data,
        files,
        communicationMethod,
        number
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new CreateTractorController()
