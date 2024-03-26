import LoginDesktop from '@/components/login/LoginDesktop';
import LoginMobile from '@/components/login/LoginMobile';
import { signIn } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'

interface FormDataInterface {
    [key: string] : string;
}

const Index = () => {
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
        <LoginDesktop LoginWithGoogle={LoginWithGoogle}/>
        <LoginMobile LoginWithGoogle={LoginWithGoogle}/>
    </>
    )
}

export default Index;
