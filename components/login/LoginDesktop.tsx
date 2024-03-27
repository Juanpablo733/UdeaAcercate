
import React from 'react'
import Image from 'next/image';

const LoginDesktop = ({LoginWithGoogle}) => {
  return (
    <>
    <div className='md:flex hidden'>
            <div className='w-2/5 h-screen flex flex-col pt-14 pb-10 pl-10 justify-between'>
                <div className='flex flex-col gap-2'>
                    <span className='Green-Hard text-5xl xl:text-6xl font-bold'>UdeAcercate</span>
                    <span className='Green-Mid text-lg xl:text-xl'>¡LA RED SOCIAL PARA EVENTOS CULTURALES, ACADÉMICOS, Y DEPORTIVOS EN LA UDEA!</span>
                </div>
                <span className='Light-Grey text-xl'>Contáctanos</span>
            </div>
            <div className='w-3/5 h-screen background-form flex justify-center items-center '>
                    <div className='w-[280px] h-[380px]  pt-10 px-6 rounded-xl flex flex-col justify-around bg-white shadow-2xl'>
                        <h1 className='text-center Green-Hard font-bold text-[32px]'>Sólo puedes ingresar con correos @udea.edu.co</h1>      
                        <button type='submit' className='button-form shadow-lg text-white font-bold text-base' onClick={LoginWithGoogle}>
                            Ingresar con correo UdeA
                            </button>
                    </div>
            </div>
        </div>
        <div className='logo-container hidden md:flex'>
            <Image src="/logo-udea.png" alt="logo udea" width={150} height={100}/>
        </div>
    </>
  )
}

export default LoginDesktop