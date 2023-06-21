import { Request, Response, NextFunction } from "express"
import detailTrailerService from "../../services/detail/detailService"

class DetailController {
  async getCar(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getCar(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getBus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getBus(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getTruck(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getMoto(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getMoto(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getTractor(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getTractor(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getTrailer(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getTrailer(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getConstruction(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getConstruction(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getDiscTire(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getDiscTire(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getPart(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getPart(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getTruckPart(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getTruckPart(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getBattery(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getBattery(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async getService(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const response = await detailTrailerService.getService(id)
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new DetailController()
