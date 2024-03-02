import React, { FormEvent, useState } from "react"
import { useMutation } from "@apollo/client";
import { GENERATE_VERIFICATION_TOKEN, VERIFY_TOKEN } from "@/graphql/client/emailToken";
import { EmailToken } from "@/prisma/generated/type-graphql";
import { useUserData } from "@/hooks/useUserData";
import { Loading } from "@/components/ui/Loading";
import router from 'next/router';

const emailAuth = process.env.EMAIL

interface FormDataInterface {
    [key: string]: string;
}

const VerifyEmail = () => {
    const [formData, setFormData] = useState<FormDataInterface>({ tokenInput: '' })
    const { userData, status } = useUserData()

    const userId = userData?.user?.id
    console.log("UserId:", userId)
    const [generateToken] = useMutation<{ emailToken: EmailToken }>(GENERATE_VERIFICATION_TOKEN,
        { variables: { userId } });
    const executeGenerateToken = async () => {
        try {
            const resultado = await generateToken();
            console.log('Data resultante de la mutación:', resultado.data);
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    var tokenInput = formData.tokenInput
    const [verifyToken, { data }] = useMutation<{ emailToken: EmailToken }>(VERIFY_TOKEN,
        { variables: { identifier: userId, token: tokenInput } });

    if (status === 'loading') return (<Loading />)

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
            router.push('/home');
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
        console.log(formData)
    }
    return (
        <>
            <title>
                Verifica tu correo | UdeAcercate
            </title>
            <div className=" Yellow-little h-screen w-full flex flex-col justify-center items-center gap-12">
                <h1>Verifique su correo electrónico</h1>
                <button onClick={sendMailFunct} className="button-form shadow-lg text-white font-bold text-base">
                    Enviar correo de verificación
                </button>
                <form method="post" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
                    <label htmlFor="tokenLabel" className="flex flex-col justify-center items-center gap-4">
                        <span className='Light-Grey font-medium text-base'>Ingrese su token</span>
                        <input name="tokenInput" className="rounded-md h-8 p-2"
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

export default VerifyEmail