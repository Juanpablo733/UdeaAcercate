import React from "react"
import { useSession } from 'next-auth/react';
import { sendVerificationEmail } from "@/util/nodemailerConfig";
import { useMutation, useQuery } from "@apollo/client";
import { GENERATE_VERIFICATION_TOKEN } from "@/graphql/client/verificationToken";
import { VerificationToken } from "@/prisma/generated/type-graphql";
import { User } from "@prisma/client";
import { GET_USERS, GET_USER_BY_EMAIL } from "@/graphql/client/users";

const emailAuth = process.env.EMAIL

const verifyEmail = () => {
    const { data: Session, status } = useSession();
    const email = Session?.user?.email
    console.log("User Email: ", email)
    const { data: userData } = useQuery<{ user: User }>(GET_USER_BY_EMAIL,
        { variables: { email }, skip: !email })
    console.log(userData)

    const userId = userData?.user?.id
    const [generateToken, { data }] = useMutation<{ verificationToken: VerificationToken }>(GENERATE_VERIFICATION_TOKEN,
        { variables: { userId } });

    console.log("Sesión: ", Session)
    if (status === 'loading') return <p>Loading...</p>

    var token = '';
    const ejecutarMutacion = async () => {
        try {
            const resultado = await generateToken();
            // La data resultante estará disponible en resultado.data
            token = resultado.data?.verificationToken?.token ?? ''
            console.log('Data resultante de la mutación:', resultado.data);
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    const sendMailFunct = async () => {
        await sendVerificationEmail(email ?? '', token)
    }
    return (
        <>
            <div>
                Verifique su correo electrónico
                Email verificado: {Session?.user?.name ? Session?.user?.name : 'ninguno'}
                <button onClick={sendMailFunct}>Enviar correo de verificación</button>
            </div>
        </>
    )
}

export default verifyEmail