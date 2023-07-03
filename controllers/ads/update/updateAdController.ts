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

  getBusToUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getBusToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateBus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateBus(
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

  getTruckToUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getTruckToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateTruck = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateTruck(
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

  getMotoToUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getMotoToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateMoto = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateMoto(
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

  getTractorToUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getTractorToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateTractor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateTractor(
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

  getTrailerToUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getTrailerToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateTrailer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateTrailer(
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

  getConstructionToUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getConstructionToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateConstruction = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateConstruction(
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

  getWheelTireToUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id, userId } = req.body
      const response = await updateAdsService.getWheelTireToUpdate(
        Number(id),
        Number(userId)
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  updateWheelTire = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body.data)
      const { countryCode, photos, ...dataToUpdate } = data
      const { id, userId } = req.body
      const files = req.files

      const response = await updateAdsService.updateWheelTire(
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
