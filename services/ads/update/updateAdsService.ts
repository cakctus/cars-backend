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

  getBusToUpdate = async (id: any, userId: any) => {
    const car = await prisma.busMicrobus.findFirst({
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

    const carToUpdate = await prisma.busMicrobus.findFirst({
      where: {
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

  updateBus = async (id: any, userId: any, updateCar: any, files: any) => {
    const car = await prisma.busMicrobus.findFirst({
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

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.busMicrobus.update({
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
            path.join("media/pics/bus", filename)
          )

          // Delete previous photos from the folder
          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.busMicrobus.update({
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

  getTruckToUpdate = async (id: any, userId: any) => {
    const car = await prisma.truck.findFirst({
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

    const carToUpdate = await prisma.truck.findFirst({
      where: {
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

  updateTruck = async (id: any, userId: any, updateCar: any, files: any) => {
    const car = await prisma.truck.findFirst({
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

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.truck.update({
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
            path.join("media/pics/truck", filename)
          )

          // Delete previous photos from the folder
          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.truck.update({
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

  getMotoToUpdate = async (id: any, userId: any) => {
    const car = await prisma.moto.findFirst({
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

    if (car.userId === user.id) {
      return { msg: "success", carToUpdate: car }
    }

    return {
      msg: "some error",
    }
  }

  updateMoto = async (id: any, userId: any, updateCar: any, files: any) => {
    const car = await prisma.moto.findFirst({
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

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.moto.update({
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
            path.join("media/pics/moto", filename)
          )

          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.moto.update({
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

  getTractorToUpdate = async (id: any, userId: any) => {
    const car = await prisma.agriculture.findFirst({
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

    if (car.userId === user.id) {
      return { msg: "success", carToUpdate: car }
    }

    return {
      msg: "some error",
    }
  }

  updateTractor = async (id: any, userId: any, updateCar: any, files: any) => {
    const car = await prisma.agriculture.findFirst({
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

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.agriculture.update({
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
            path.join("media/pics/tractor", filename)
          )

          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.agriculture.update({
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

  getTrailerToUpdate = async (id: any, userId: any) => {
    const car = await prisma.trailer.findFirst({
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

    if (car.userId === user.id) {
      return { msg: "success", carToUpdate: car }
    }

    return {
      msg: "some error",
    }
  }

  updateTrailer = async (id: any, userId: any, updateCar: any, files: any) => {
    const car = await prisma.trailer.findFirst({
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

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.trailer.update({
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
            path.join("media/pics/trailer", filename)
          )

          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.trailer.update({
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

  getConstructionToUpdate = async (id: any, userId: any) => {
    const car = await prisma.construction.findFirst({
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

    if (car.userId === user.id) {
      return { msg: "success", carToUpdate: car }
    }

    return {
      msg: "some error",
    }
  }

  updateConstruction = async (
    id: any,
    userId: any,
    updateCar: any,
    files: any
  ) => {
    const car = await prisma.construction.findFirst({
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

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.construction.update({
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
            path.join("media/pics/construction", filename)
          )

          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.construction.update({
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

  getWheelTireToUpdate = async (id: any, userId: any) => {
    const car = await prisma.wheelsTire.findFirst({
      where: {
        id,
      },
      include: {
        tire: true,
        disc: true,
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

    if (car.userId === user.id) {
      return { msg: "success", carToUpdate: car }
    }

    return {
      msg: "some error",
    }
  }

  updateWheelTire = async (
    id: any,
    userId: any,
    updateCar: any,
    files: any
  ) => {
    const car = await prisma.wheelsTire.findFirst({
      where: {
        id,
      },
      include: {
        disc: true,
        tire: true,
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

    const { photo, tire, disc, ...newCar } = updateCar
    const { id: discIt, ...newDisc } = disc
    const { id: tireId, ...newTire } = disc

    const updatedDisc = await prisma.disc.update({
      where: {
        id: car?.disc?.id,
      },
      data: newDisc,
    })

    const updatedTire = await prisma.disc.update({
      where: {
        id: car?.tire?.id,
      },
      data: newTire,
    })

    if (car.userId === user.id) {
      if (photoList.length > 0) {
        const carToUpdate = await prisma.wheelsTire.update({
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
            path.join("media/pics/tire", filename)
          )

          prevPhotoPaths.forEach((prevPhotoPath) => {
            fs.unlinkSync(prevPhotoPath)
          })
        }
        return carToUpdate
      }
      const carToUpdate = await prisma.wheelsTire.update({
        where: {
          id,
        },
        data: {
          ...newCar,
          photo: photo,
          // ...updatedDisc,
          disc: {
            connect: {
              id: updatedDisc.id, // Reconnect the updated Disc to the WheelsTire
            },
          },
          tire: {
            connect: {
              id: updatedTire.id, // Reconnect the updated Tire to the WheelsTire
            },
          },
        },
      })
      console.log(carToUpdate)
      return carToUpdate
    }
  }
}

export default new UpdateAdsService()
