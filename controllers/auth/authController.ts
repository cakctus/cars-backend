import { Request, Response, NextFunction } from "express"
import authService from "../../services/auth/authService"

class User {
  async reg(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, role } = req.body
      const data = await authService.reg(email, role, password)
      res.cookie("refreshToken", data.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true, // https
      })
      return res.json(data)
    } catch (error) {
      next(error)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body
      const data = await authService.login(email, password)
      res.cookie("refreshToken", data.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true, // https
      })
      return res.json(data)
    } catch (error) {
      next(error)
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies
      const data = await authService.logout(refreshToken)
      res.clearCookie("refreshToken")
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    try {
      const activationLink = req.params.link
      await authService.activate(activationLink)
      return res.redirect("http://localhost:3000")
    } catch (error) {
      next(error)
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies
      const data = await authService.refresh(refreshToken)
      res.cookie("refreshToken", data!.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      return res.json(data)
    } catch (error) {
      next(error)
    }
  }

  async users(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.getUsers()
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

export default new User()
