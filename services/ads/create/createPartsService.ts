import { PrismaClient } from "@prisma/client"
import ApiError from "../../../exceptions/apiError"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

class CreatePartsService {
  photoLength: number = 35

  async createAd(
    id: any,
    carData: any,
    files: any,
    comunicationMethod: any,
    number: any
  ) {
    const {
      title,
      description,
      region,
      price,
      currency,
      partsCategory,
      brand,
      model,
      generation,
      modification,
      modelId,
      generationId,
      modificationId,
      partsCondition,
      contacts,
    } = carData

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    })

    if (user) {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          comunicationMethod,
        },
      })
    }

    const { countryCode } = carData

    if (number) {
      const checkNumber = await prisma.number.findFirst({
        where: {
          number,
        },
      })
      if (checkNumber) {
        throw ApiError.NumberAlreadyExists("Number already exists")
      } else {
        await prisma.number.create({
          data: {
            number,
            User: {
              connect: {
                id,
              },
            },
          },
        })
        if (countryCode) {
          await prisma.user.update({
            where: {
              id,
            },
            data: {
              countryCode,
            },
          })
        }
      }
    }

    const photo = files.map((file: any) => {
      return file.filename
    })

    if (photo.length && photo.length > this.photoLength) {
      throw ApiError.BadRequest(
        "Максимально допустимое количество фотографий 35. Numărul maxim de fotografii permis este de 35"
      )
    }

    const created = await prisma.carParts.create({
      data: {
        uuid: uuidv4(),
        title,
        description,
        region,
        price,
        currency,
        partsCategory,
        brand,
        model,
        generation,
        modification,
        modelId: String(modelId),
        generationId: String(generationId),
        modificationId: String(modificationId),
        partsCondition,
        contacts,
        photo,
        User: {
          connect: {
            id,
          },
        },
      },
    })
    return created
  }
}

export default new CreatePartsService()
