import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import React, { FormEvent, useCallback, useState } from 'react'

interface FormDataInterface {
    [key: string] : string;
}

const index = () => {
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Los datos del usuario son: ', formData);
    }
    const LoginWithGoogle = () => {signIn('google', {callbackUrl: 'http://localhost:3000/home'})}
    // const [user, setUser] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    const [formData, setFormData] = useState<FormDataInterface>({user: '', password: ''});
  return (
    <>
    <Button onClick={LoginWithGoogle}>
        Iniciar sesion con Google
    </Button>
        <div className='flex'>
            <div className='w-2/5 h-screen flex flex-col py-12 pl-12 justify-between'>
                <div className='flex flex-col'>
                    {/* <span className='Green-Hard text-[64px] font-bold'>SignAI</span> */}
                    <span className='Green-Hard text-[64px] font-bold'>UdeAcercate</span>
                    {/* <span className='Green-Mid text-xl'>UNIENDO MUNDOS SEÑA POR SEÑA</span> */}
                    <span className='Green-Mid text-xl'>!LA RED SOCIAL PARA EVENTO CULTURALES, ACADEMICOS, Y DEPORTIVOS EN LA UDEA!</span>
                </div>
                <div className=''>
                    <span className='Light-Grey text-xl'>Contáctanos</span>
                </div>
            </div>
            <div className='w-3/5 h-screen background-form flex justify-center items-center'>
                <form onSubmit={submitForm}>
                    <div className='w-[280px] h-[380px]  pt-12 px-6 rounded-xl flex flex-col gap-8 bg-white shadow-2xl'>
                        <h1 className='text-center Green-Hard font-bold text-[32px]'>Iniciar Sesión</h1>
                        <label htmlFor="user">
                            <span className='Light-Grey font-medium text-base'>Usuario</span>
                            <input
                            className='input-form' 
                            type="text"
                            name='user'
                            value={formData.user}
                            onChange={(e)=>{
                                setFormData({...formData, [e.target.name]: e.target.value});
                            }}
                            required
                            />
                        </label>
                        <label htmlFor="password">
                            <span className='Light-Grey font-medium text-base'>Contraseña</span>
                            <input
                            className='input-form' 
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({...formData, [e.target.name]: e.target.value});
                            }}
                            required
                            />
                        </label>
                        <button type='submit' className='button-form shadow-lg text-white font-bold text-base'>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='logo-container'>
            <img src="/logo-udea.png" alt="logo udea"/>
        </div>
    </>
    )
}

export default index;
