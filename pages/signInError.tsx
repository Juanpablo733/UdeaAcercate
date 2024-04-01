import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import React from 'react';

const SignInError = () => {
    const LoginWithGoogle = () => { signIn('google', { callbackUrl: '/home' }) }
    return (
        <>
            <title>
                Error de inicio de sesión | UdeAcercate
            </title>
            <div className='h-screen flex flex-col items-center justify-center bg-[var(--green-hard)] gap-8 px-6'>
                <p className='text-white font-bold text-2xl'>Error de inicio de sesión</p>
                <h2 className='text-white font-bold sm:text-2xl text-xl text-center'>Por favor inicie sesión con una cuenta institucional terminada en @udea.edu.co</h2>
                <Button onClick={LoginWithGoogle} className='text-[var(--green-hard)] bg-white font-bold text-lg hover:bg-gray-300 rounded-2xl'>
                    Volver a intentar
                </Button>
            </div>
        </>
    )
}

export default SignInError;