import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React, { FormEvent, useCallback, useState } from 'react'

interface FormDataInterface {
    [key: string] : string;
}

const index = () => {
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Los datos del usuario son: ', formData);
    }
    const LoginWithGoogle = () => {signIn('google', {callbackUrl: '/home'})}
    // const [user, setUser] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    const [formData, setFormData] = useState<FormDataInterface>({user: '', password: ''});
  return (
    <>
    <title>
        UdeAcercate
    </title>
        <div className='flex'>
            <div className='w-2/5 h-screen flex flex-col py-12 pl-12 justify-between'>
                <div className='flex flex-col'>
                    {/* <span className='Green-Hard text-[64px] font-bold'>SignAI</span> */}
                    <span className='Green-Hard text-[64px] font-bold'>UdeAcercate</span>
                    {/* <span className='Green-Mid text-xl'>UNIENDO MUNDOS SEÑA POR SEÑA</span> */}
                    <span className='Green-Mid text-xl'>¡LA RED SOCIAL PARA EVENTOS CULTURALES, ACADÉMICOS, Y DEPORTIVOS EN LA UDEA!</span>
                </div>
                <div className=''>
                    <span className='Light-Grey text-xl'>Contáctanos</span>
                </div>
            </div>
            <div className='w-3/5 h-screen background-form flex justify-center items-center'>
                    <div className='w-[280px] h-[380px]  pt-12 px-6 rounded-xl flex flex-col justify-around bg-white shadow-2xl'>
                        <h1 className='text-center Green-Hard font-bold text-[32px]'>Sólo puedes ingresar con correos @udea.edu.co</h1>      
                        <button type='submit' className='button-form shadow-lg text-white font-bold text-base' onClick={LoginWithGoogle}>
                            Ingresar con correo UdeA
                            </button>
                    </div>
            </div>
        </div>
        <div className='logo-container'>
            <Image src="/logo-udea.png" alt="logo udea" width={150} height={100}/>
        </div>
    </>
    )
}

export default index;
