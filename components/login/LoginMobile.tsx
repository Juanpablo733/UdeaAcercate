import React from 'react'
import Image from 'next/image';


const LoginMobile = ({LoginWithGoogle}) => {
  return (
    <div className=' flex flex-col background-register items-center md:hidden h-screen justify-center gap-4'>
        <div className='w-[360px] h-[420px] rounded-xl flex flex-col bg-white shadow-2xl px-8 gap-8 justify-center'>
            <div className=' flex items-end'>
                <span className='text-7xl font-bold Green-Hard font-mono'>UdeA</span>
                <span className='text-3xl Green-Hard font-serif'>cércate</span>
            </div>
            <span className='Green-Mid text-lg'>¡LA RED SOCIAL PARA EVENTOS CULTURALES, ACADÉMICOS, Y DEPORTIVOS EN LA UDEA!</span>
            <span className='Green-Mid text-lg'>Ingresa con tu correo institucional</span>
            <button type='submit' className='button-form shadow-lg text-white font-bold text-base' onClick={LoginWithGoogle}>
                Ingresar
            </button>
        </div>
        <Image src="/logo-udea.png" alt="logo udea" width={150} height={100}/>
    </div>
  )
}

export default LoginMobile