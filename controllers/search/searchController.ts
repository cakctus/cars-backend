import { Request, Response, NextFunction, response } from "express"
import searchService from "../../services/search/searchService"
import querystring from "querystring"

class SearchController {
  async searchCars(req: Request, res: Response, next: NextFunction) {
    try {
      const { modelId, generationId, page, ...data } = req.query
      const { body } = req.body

      console.log(req.query, "query")
      console.log(req.body, "body")
      const response = await searchService.searchCarService(data, body, 2)
      // // console.log(response.cars.length, "response.length")
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export default new SearchController()
