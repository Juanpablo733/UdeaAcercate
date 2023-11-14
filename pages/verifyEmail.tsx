import React, { FormEvent, useState } from "react"
import { useSession } from 'next-auth/react';
import { sendVerificationEmail } from "@/util/nodemailerConfig";
import { useMutation, useQuery } from "@apollo/client";
import { GENERATE_VERIFICATION_TOKEN, VERIFY_TOKEN } from "@/graphql/client/emailToken";
import { EmailToken, VerificationToken } from "@/prisma/generated/type-graphql";
import { User } from "@prisma/client";
import { GET_USERS, GET_USER_BY_EMAIL } from "@/graphql/client/user";
import { useUserData } from "@/hooks/useUserData";
import { Loading } from "@/components/ui/Loading";

const emailAuth = process.env.EMAIL

interface FormDataInterface {
    [key: string]: string;
}

const verifyEmail = () => {
    const [formData, setFormData] = useState<FormDataInterface>({ tokenInput: '' })

    const {userData, status} = useUserData()

    // const { data: Session, status } = useSession();
    // const email = Session?.user?.email
    // console.log(Session)
    // console.log(status)
    // const { data: userData } = useQuery<{ user: User }>(GET_USER_BY_EMAIL,
    //     { variables: { email }, skip: !email })

    const userId = userData?.user?.id
    console.log("UserId:", userId)
    const [generateToken] = useMutation<{ emailToken: EmailToken }>(GENERATE_VERIFICATION_TOKEN,
        { variables: { userId } });
    var token = '';
    const executeGenerateToken = async () => {
        try {
            const resultado = await generateToken();
            // La data resultante estará disponible en resultado.data
            token = resultado.data?.emailToken?.token ?? ''
            console.log('Data resultante de la mutación:', resultado.data);
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    var tokenInput = formData.tokenInput
    const [verifyToken, { data }] = useMutation<{ emailToken: EmailToken }>(VERIFY_TOKEN,
        { variables: { identifier: userId, token: tokenInput } });

    if (status === 'loading') return (<Loading/>)

    const sendMailFunct = async () => {
        await executeGenerateToken()
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("tokenInput: ", tokenInput)
            const resultado = await verifyToken()
            // La data resultante estará disponible en resultado.data
            console.log('Verificado: ', resultado.data);
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
        console.log(formData)
    }
    return (
        <>
            <div>
                <h1>Verifique su correo electrónico</h1>
                <button onClick={sendMailFunct} className="button-form shadow-lg text-white font-bold text-base">
                    Enviar correo de verificación
                </button>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor="tokenLabel">
                        <span className='Light-Grey font-medium text-base'>Ingrese su token</span>
                        <input name="tokenInput"
                            onChange={(e) => {
                                setFormData({ ...formData, [e.target.name]: e.target.value });
                                console.log(formData)
                            }} />
                    </label>
                    <div />
                    <button type="submit" className="button-form shadow-lg text-white font-bold text-base">
                        Verificar token
                    </button>
                </form>
            </div>
        </>
    )
}

export default verifyEmail