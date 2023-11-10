import { GENERATE_VERIFICATION_TOKEN } from '@/graphql/client/verificationToken'
import { VerificationToken } from '@/prisma/generated/type-graphql'
import { useQuery } from '@apollo/client'
import nodemailer from 'nodemailer'


const emailAuth = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const sendVerificationEmail = async (email: string, token: string) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailAuth,
            pass: pass
        }
    })
    const mailOptions = {
        from: emailAuth,
        to: email,
        subject: "UdeAcercate | Verifica tu correo",
        html: `<h1>Verifica tu correo institucional</h1>
        <h2>Ingresa este token en la página para verificar tu correo institucional <h2/>
        <p>${token}<p>`
    }

    const mailResponde = await transporter.sendMail(mailOptions);
    return mailResponde;
}