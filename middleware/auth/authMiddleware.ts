import ApiError from "../../exceptions/apiError"
import { Request, Response, NextFunction } from "express"
import tokenService from "../../services/token/tokenService"

class AuthMiddleware {
  checkAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization

      // check if authorization in request header
      if (!authHeader) {
        return next(ApiError.UnauthorizedError())
      }
      // split acces token and check
      const accesToken = authHeader.split(" ")[1]

      console.log(accesToken)
      if (accesToken === "null") {
        return next(ApiError.UnauthorizedError())
      }
      // validate acces token
      const userData = tokenService.validateAccesToken(accesToken)

      if (!userData) {
        return next(ApiError.UnauthorizedError())
      }
      //   req.user = userData
      next()
    } catch (error) {
      return next(error)
    }
  }
}

export default new AuthMiddleware()
