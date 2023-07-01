import { Request, Response, NextFunction } from "express"

import updateAdsService from "../../../services/ads/update/updateAdsService"

class UpdateAdController {
  getCarToUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getCarToUpdate(
        Number(id),
        Number(userId)
      )

      console.log(id, userId)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      console.log(req.body)
      const response = await updateAdsService.updateCar(
        Number(id),
        Number(userId),
        dataToUpdate,
        files
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new UpdateAdController()
