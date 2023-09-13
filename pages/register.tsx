import React, { FormEvent, useState } from 'react'

interface FormDataInterface {
    [key: string] : string;
}

const Registro = () => {
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Los datos del usuario son: ', formData);
    }
    // const [user, setUser] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    const [formData, setFormData] = useState<FormDataInterface>({user: '', password: '', passwordVerification: ''});
  return (
    <>
        
        <div className='w-screen h-screen flex justify-center items-center background-register'>
            <form onSubmit={submitForm}>
                <div className='w-[440px] h-[620px]  pt-12 px-6 rounded-xl flex flex-col gap-8 bg-white shadow-2xl'>
                    <h1 className='text-center Green-Hard font-bold text-[32px]'>Registro</h1>
                    <label htmlFor="user">
                        <span className='Light-Grey font-medium text-base'>Correo Institucional</span>
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
            <img src="/logo-udea.png" alt="logo udea"/>
        </div>
    </>
    )
}

export default Registro