import { Request, Response, NextFunction, response } from "express"
import searchService from "../../services/search/searchService"
import querystring from "querystring"

class SearchController {
  private searchLimit: number = 2

  constructor() {
    this.searchCars = this.searchCars.bind(this)
    this.searchBuses = this.searchBuses.bind(this)
    this.searchMoto = this.searchMoto.bind(this)
  }

  async searchCars(req: Request, res: Response, next: NextFunction) {
    try {
      const { modelId, generationId, page, modificationId, ...data } = req.query
      const { body } = req.body

      const response = await searchService.searchCarService(
        data,
        body,
        this.searchLimit
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async searchBuses(req: Request, res: Response, next: NextFunction) {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const decodedData: any = {}
      for (const key in data) {
        decodedData[key] = decodeURIComponent(data[key] || "")
      }

      const response = await searchService.searchBus(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchTruck = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const decodedData: any = {}
      for (const key in data) {
        decodedData[key] = decodeURIComponent(data[key] || "")
      }

      const response = await searchService.searchTruck(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchMoto = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const decodedData: any = {}
      for (const key in data) {
        decodedData[key] = decodeURIComponent(data[key] || "")
      }

      const response = await searchService.searchMoto(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchTractor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const response = await searchService.searchTractor(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchTrailer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const response = await searchService.searchTrailer(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchConstruction = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const response = await searchService.searchConstruction(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchWheelTire = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const { modelId, generationId, page, modificationId, ...data }: any =
      //   req.query
      const { body, page } = req.body

      const response = await searchService.searchWheelTire(
        body,
        page,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchParts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const response = await searchService.searchParts(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchTruckParts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const response = await searchService.searchTruckParts(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchBattery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { modelId, generationId, page, modificationId, ...data }: any =
        req.query
      const { body } = req.body

      const response = await searchService.searchBattery(
        data,
        body,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  searchService = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { serviceCategory, repairCategory, ...data } = req.body.body

      const response = await searchService.searchService(
        data,
        req.body.page,
        this.searchLimit
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new SearchController()
