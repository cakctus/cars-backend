import { PrismaClient } from "@prisma/client"
import ApiError from "../../../exceptions/apiError"
import fs from "fs"
import path from "path"

const prisma = new PrismaClient()

class UpdateAdsService {
  getCarToUpdate = async (id: any, userId: any) => {
    const car = await prisma.car.findFirst({
      where: {
        id,
      },
    })

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!car) {
      throw ApiError.DoesNotExist(
        `Обьявления с идентификатором ${id} не существует. \n Nu există niciun anunț cu id ${id}.`
      )
    }

    if (!user) {
      throw ApiError.DoesNotExist(
        `Пользователь с идентификатором ${userId} не существует. \n Utilizatorul cu id ${id} nu există.`
      )
    }

    if (!(car.userId === user.id)) {
      throw ApiError.BadRequest(
        "Чтобы обновлять эту статью, вы должны быть ее автором.\n Pentru a actualiza acest articol, trebuie să fii autorul."
      )
    }

    const carToUpdate = await prisma.car.findFirst({
      where: {
        // userId: user.id,
        id,
      },
    })

    if (car.userId === user.id) {
      return { msg: "success", carToUpdate }
    }

    return {
      msg: "some error",
    }
  }

  updateCar = async (id: any, userId: any, updateCar: any, files: any) => {
    const car = await prisma.car.findFirst({
      where: {
        id,
      },
    })

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!car) {
      throw ApiError.DoesNotExist(
        `Обьявления с идентификатором ${id} не существует. \n Nu există niciun anunț cu id ${id}.`
      )
    }

    if (!user) {
      throw ApiError.DoesNotExist(
        `Пользователь с идентификатором ${userId} не существует. \n Utilizatorul cu id ${id} nu există.`
      )
    }

    if (!(car.userId === user.id)) {
      throw ApiError.BadRequest(
        "Чтобы обновлять эту статью, вы должны быть ее автором.\n Pentru a actualiza acest articol, trebuie să fii autorul."
      )
    }

    const photoList = files.map((file: any) => {
      return file.filename
    })

    const { photo, ...newCar } = updateCar
    // console.log(photo)
    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.car.update({
          where: {
            id,
          },
          data: {
            ...newCar,
            photo: photoList,
          },
        })
        if (carToUpdate) {
          const prevPhotoPaths = car.photo.map((filename) =>
            path.join("media/pics/cars", filename)
          )

          // Delete previous photos from the folder
          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.car.update({
        where: {
          id,
        },
        data: {
          ...newCar,
          photo: photo,
        },
      })
      return carToUpdate
    }
  }
}

export default new UpdateAdsService()
