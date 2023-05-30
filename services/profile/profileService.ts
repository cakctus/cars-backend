import countries from "country-data"
import { unlink } from "node:fs/promises"
import { fileURLToPath } from "url"
import { dirname, basename, extname, join } from "path"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class ProfileService {
  async getCountryCodes() {
    return countries.callingCodes.all
  }

  async userDtoUpdateService(body: any, files: any) {
    const {
      userId,
      accessToken,
      refreshToken,
      dateJoined,
      isActivated,
      userPhoto,
      userProfilePhoto,
      isStaff,
      ...data
    } = body
    const id = Number(body.userId)

    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    })

    if (files["userPhoto"][0].fieldname === "userPhoto") {
      console.log("?")
      const { filename, destination, path } = files["userPhoto"][0]
      const fName = filename?.replace(/\s+/g, "_")
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      })

      if (user!.userPhoto === "") {
        const userUpdate = await prisma.user.update({
          where: {
            id: user!.id,
          },
          data: {
            userPhoto: fName,
          },
        })
        return userUpdate
      }

      if (user!.userPhoto.length > 0) {
        try {
          await unlink(destination + "\\" + `${user!.userPhoto}`)
          console.log("successfully deleted")
        } catch (error) {
          console.error("there was an error:", error)
        }
      }
      const userUpdate = await prisma.user.update({
        where: {
          id: user!.id,
        },
        data: {
          userPhoto: fName,
        },
      })
    }
    if (files.userProfilePhoto[0].fieldname === "userProfilePhoto") {
      const { filename, destination, path } = files["userProfilePhoto"][0]
      const fName = filename?.replace(/\s+/g, "_")
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      })

      if (user!.userProfilePhoto === "") {
        const userUpdate = await prisma.user.update({
          where: {
            id: user!.id,
          },
          data: {
            userProfilePhoto: fName,
          },
        })
        return userUpdate
      }

      // if (user!.userProfilePhoto && user!.userProfilePhoto.length > 0) {
      //   try {
      //     await unlink(destination + "\\" + `${user!.userProfilePhoto}`)
      //     console.log("successfully deleted")
      //   } catch (error) {
      //     console.error("there was an error:", error)
      //   }
      // }
      const userUpdate = await prisma.user.update({
        where: {
          id: user!.id,
        },
        data: {
          userProfilePhoto: fName,
        },
      })
      return userUpdate
    }
    return user
  }

  async updateUserPhotoService(
    destination: any,
    filename: any,
    path: any,
    userId: any
  ) {
    const fName = filename?.replace(/\s+/g, "_")
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    })

    if (user!.userPhoto === "") {
      const userUpdate = await prisma.user.update({
        where: {
          id: user!.id,
        },
        data: {
          userPhoto: fName,
        },
      })
      return userUpdate
    }

    if (user!.userPhoto.length > 0) {
      try {
        //@ts-ignore
        // const __filename = fileURLToPath(import.meta.url)
        // const __dirname = dirname(__filename)
        // const f = `media/profile/users/${user!.userPhoto}`

        // console.log(dirname(process.cwd()) + join("/", f)) // /users/joe
        // console.log(basename(f)) // notes.txt
        // console.log(extname(f))
        // console.log(join("/", f))
        // const j = join("/", f)
        await unlink(destination + "\\" + `${user!.userPhoto}`)
        console.log("successfully deleted")
      } catch (error) {
        console.error("there was an error:", error)
      }
    }
    const userUpdate = await prisma.user.update({
      where: {
        id: user!.id,
      },
      data: {
        userPhoto: fName,
      },
    })
    return userUpdate
  }

  async updateUserProfilePhotoService(
    destination: any,
    filename: any,
    path: any,
    userId: any
  ) {
    const fName = filename?.replace(/\s+/g, "_")
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    })

    if (user!.userProfilePhoto === "") {
      const userUpdate = await prisma.user.update({
        where: {
          id: user!.id,
        },
        data: {
          userProfilePhoto: fName,
        },
      })
      return userUpdate
    }

    if (user!.userPhoto.length > 0) {
      try {
        //@ts-ignore
        // const __filename = fileURLToPath(import.meta.url)
        // const __dirname = dirname(__filename)
        // const f = `media/profile/users/${user!.userPhoto}`

        // console.log(dirname(process.cwd()) + join("/", f)) // /users/joe
        // console.log(basename(f)) // notes.txt
        // console.log(extname(f))
        // console.log(join("/", f))
        // const j = join("/", f)
        await unlink(destination + "\\" + `${user!.userProfilePhoto}`)
        console.log("successfully deleted")
      } catch (error) {
        console.error("there was an error:", error)
      }
    }
    const userUpdate = await prisma.user.update({
      where: {
        id: user!.id,
      },
      data: {
        userProfilePhoto: fName,
      },
    })
    return userUpdate
  }
}

export default new ProfileService()
