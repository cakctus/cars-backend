import nodemailer from "nodemailer"

class MainService {
  async mailService(email: string, link: string) {
    let transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST,
      // port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    transporter.sendMail(
      {
        from: "cakctusinc@gmail.com",
        to: email,
        subject: "Registration confirmation",
        text: "",
        html: `
              <div>
                  <h1>Activation</h1>
                  <a href=${link}>${link}</a>
              </div>
          `,
      },
      (err, info) => {
        console.log(err)
      }
    )
  }
}

export default new MainService()
