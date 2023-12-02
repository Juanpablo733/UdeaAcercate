import React, { FormEvent, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';

interface FormDataInterface {
    [key: string] : string;
}

const Registro = () => {
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('antes: ',formData);
        try{
            const response = await axios.post('/api/registrar', formData, {headers: {'Content-Type': 'application/json'}});
            console.log(response.status);
            if (response.status === 200) {
                console.log('Usuario registrado con exito');
            } else {
                console.log('Error al registrar usuario');
            }
        }catch(error){
            console.error('Error al realizar la solicitud', error)
        }
        console.log('despues: ',formData);
    }
    const [formData, setFormData] = useState<FormDataInterface>({email: '', password: '', passwordVerification: ''});
  return (
    <>
        
        <div className='w-screen h-screen flex justify-center items-center background-register'>
            <form onSubmit={submitForm}>
                <div className='w-[440px] h-[620px]  pt-12 px-6 rounded-xl flex flex-col gap-8 bg-white shadow-2xl'>
                    <h1 className='text-center Green-Hard font-bold text-[32px]'>Registro</h1>
                    <label htmlFor="email">
                        <span className='Light-Grey font-medium text-base'>Correo Institucional</span>
                        <input
                        className='input-form' 
                        type="text"
                        name='email'
                        value={formData.email}
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
                    <label htmlFor="passwordVerification">
                        <span className='Light-Grey font-medium text-base'>Confirmar Contraseña</span>
                        <input
                        className='input-form' 
                        type="password"
                        name='passwordVerification'
                        value={formData.passwordVerification}
                        onChange={(e) => {
                            setFormData({...formData, [e.target.name]: e.target.value});
                        }}
                        required
                        />
                    </label>
                    <button type='submit' className='button-form shadow-lg text-white font-bold text-base'>Registrarse</button>
                    <button type='submit' className='button-secondary'>Volver</button>
                </div>
            </form>
        </div>
        <div className='logo-container'>
            <Image src="/logo-udea.png" alt="logo udea"/>
            {/* <Image src="/logo-udea.png" alt="logo udea" width={} height={}/> */}
        </div>
    </>
    )
}

export default Registro