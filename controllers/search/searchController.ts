import { Request, Response, NextFunction, response } from "express"
import searchService from "../../services/search/searchService"
import querystring from "querystring"

class SearchController {
  private searchLimit: number = 2

  constructor() {
    this.searchCars = this.searchCars.bind(this)
    this.searchBuses = this.searchBuses.bind(this)
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

      console.log(req.query, "query")
      console.log(data, "data")
      console.log(decodedData, "decodedData")
      console.log(querystring.parse(data))
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
}

export default new SearchController()
