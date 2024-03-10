import React, { FormEvent, useState } from "react"
import { useMutation } from "@apollo/client";
import { GENERATE_VERIFICATION_TOKEN, VERIFY_TOKEN } from "@/graphql/client/emailToken";
import { EmailToken } from "@/prisma/generated/type-graphql";
import { useUserData } from "@/hooks/useUserData";
import { toast } from 'react-toastify';
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
            toast.success('¡Envío satisfactorio!')
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
            toast.error('Error de envío')
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
            toast.error('Token incorrecto')
        }
        console.log(formData)
    }

    return (
        <>
            <title>
                Verifica tu correo | UdeAcercate
            </title>
            <div className="flex flex-col justify-center items-center h-screen w-screen background-register">
                <div className='Yellow-little w-full h-[70%] max-w-[80%] sm:max-w-[600px] rounded-3xl flex flex-col items-center justify-evenly shadow-xl'>
                    <div className="mx-14">
                        <h1 className="FormHeader text-xl sm:text-3xl">Verifique su correo electrónico</h1>
                    </div>
                    <div className="mx-14 max-w-[400px]">
                        <p className="LabelText text-base text-justify sm:text-center ">Presione el botón para enviar un token de verificación a su correo institucional.</p>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={sendMailFunct} className="button-form shadow-lg text-white font-bold text-base">
                            Enviar token
                        </button>
                    </div>
                    <form method="post" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
                        <label htmlFor="tokenLabel" className="flex flex-col justify-center items-center gap-4">
                            <span className='Light-Grey font-medium text-base'>Ingrese su token</span>
                            <input name="tokenInput" className="Input Yellow-little h-8 p-2"
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
            </div>
        </>
    )
}

export default VerifyEmail