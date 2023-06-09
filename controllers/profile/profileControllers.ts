import { Request, Response, NextFunction, response } from "express"
import profileService from "../../services/profile/profileService"

class ProfileController {
  async countriesCodes(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await profileService.getCountryCodes()
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async userDtoUpdate(req: Request, res: Response, next: NextFunction) {
    try {
      // const body = req.body
      const body = JSON.parse(req.body.body)
      const { destination, filename, path, fieldname } = req.file
        ? req.file
        : { destination: "", filename: "", path: "", fieldname: "" }

      const response = await profileService.userDtoUpdateService(
        body,
        req.files
      )

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async updateUserPhoto(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.body
      const { destination, filename, path } = req.file
        ? req.file
        : { destination: "", filename: "", path: "" }
      const response = await profileService.updateUserPhotoService(
        destination,
        filename,
        path,
        userId
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async updateUserProfilePhoto(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.body
      const { destination, filename, path } = req.file
        ? req.file
        : { destination: "", filename: "", path: "" }
      const response = await profileService.updateUserProfilePhotoService(
        destination,
        filename,
        path,
        userId
      )
      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  async updateUserContacts(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, comunicationMethod } = req.body
      const data = await profileService.updatecomunicationMethodService(
        userId,
        comunicationMethod
      )
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  async addPhone(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, number } = req.body
      const data = await profileService.updatecomunicationMethodService(
        userId,
        number
      )
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  async deletePhone(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body
      const data = await profileService.deletePhoneNumberService(id)
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

export default new ProfileController()
