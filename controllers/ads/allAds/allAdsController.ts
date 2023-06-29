import { Request, Response, NextFunction, response } from "express"
import allAdsService from "../../../services/ads/allAds/allAdsService"

class AllAdsControoler {
  async getAllCars(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllCars(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllMotos(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllMotos(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllBus(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllBus(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllTruck(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllTractor(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllTractor(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllConstruction(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllConstruction(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllTrailer(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllTrailer(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllParts(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllParts(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllTruckParts(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllTruckParts(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllBattery(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllBattery(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllWheelTire(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllWheelTire(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getAllService(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, page, limit } = req.params

      const response = await allAdsService.getAllService(
        userId,
        Number(page),
        Number(limit)
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new AllAdsControoler()
