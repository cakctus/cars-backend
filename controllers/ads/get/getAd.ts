import { Request, Response, NextFunction } from "express"
import getAdService from "../../../services/ads/getAd/getAdService"

class GetAd {
  async getAd(req: Request, res: Response, next: NextFunction) {
    try {
      const { url, uuid } = req.params
      const response = await getAdService.getAd(url, uuid)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new GetAd()
