import nodemailer from 'nodemailer'
import { email } from '../config/index.config.js'
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email.user,
        pass: email.pass,
    },
})

export const sendMail = async (to, subject, text) => {
    transporter.sendMail(
        {
            from: email.user,
            to,
            subject,
            text,
        },
        function (error, info) {
            if (error) {
                console.log(error)
// logger ishlatish kerak edi menimcha
            } else {
                console.log('Email sent: ' + info.response)
            }
        },
    )
}
