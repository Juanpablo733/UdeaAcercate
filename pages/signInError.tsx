import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import React from 'react';

const SignInError = () => {
    const LoginWithGoogle = () => {signIn('google', {callbackUrl: '/home'})}
    return (
        <div>
            <p>Error de inicio de sesión</p>
            <h2>Por favor inicie sesión con una cuenta institucional terminada en @udea.edu.co</h2>
            <Button onClick={LoginWithGoogle}>
                Volver a intentar
            </Button>
        </div>
    )
}

export default SignInError;