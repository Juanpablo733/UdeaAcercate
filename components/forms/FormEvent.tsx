import React, { FormEvent, useState } from 'react'
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { spawn } from 'child_process';
// import { useUserData } from '@/hooks/useUserData';

interface FormDataInterface {
    [key: string] : string;
}
const FormEvent = (userData: string) => {
    // const {userData} = useUserData();
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("url imagen", usrImage);
        // setFormData({
        //     ...formData,
        //     image: usrImage,
        //     authorId: userData,
        //   });
        setFormData({...formData, image: usrImage});
        setFormData({...formData, authorId: userData});
        console.log('formaData: ',formData);
        console.log("url imagen", usrImage);
    }

    const [formData, setFormData] = useState<FormDataInterface>({title: '', description: '', place: '', date: '', tag: 'Academico', image: '', authorId: ''});
    const [usrImage, setUsrImage] = useState('');

    function handleOnUpload(result: any, operations: any) {
        // if (!result.event === "success") {
        // //   updateError(result?.info);
        //   return;
        // }
        setUsrImage(result?.info.secure_url);
        // setValue("userImage", result?.info.secure_url);
        // console.log("url imagen", usrImage);
      }
  return (
    <form onSubmit={submitForm} className='w-[400px] flex flex-col gap-2'>
            <label htmlFor="title">
                <span>Titulo:</span>
                <input 
                    type="text" 
                    name='title'
                    placeholder='titulo del evento'
                    value={formData.title}
                    onChange={(e)=>{
                        setFormData({...formData, [e.target.name]: e.target.value});
                    }}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />
            </label>
            <label htmlFor="description">
                <span>Descripcion:</span>
                <input 
                    type="text" 
                    name='description'
                    placeholder='descripcion del evento'
                    value={formData.description}
                    onChange={(e)=>{
                        setFormData({...formData, [e.target.name]: e.target.value});
                    }}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />
            </label>
            <label htmlFor="place">
                <span>Lugar:</span>
                <input 
                    type="text" 
                    name='place'
                    placeholder='lugar del evento'
                    value={formData.place}
                    onChange={(e)=>{
                        setFormData({...formData, [e.target.name]: e.target.value});
                    }}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />   
            </label>
            <label htmlFor="date">
                <span>Fecha:</span>
                <input 
                    type="date" 
                    name='date'
                    placeholder='fecha del evento'
                    value={formData.date}
                    onChange={(e)=>{
                        setFormData({...formData, [e.target.name]: e.target.value});
                    }}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />
            </label>
            <label htmlFor="tag">
                <span>Tipo de evento:</span>
                <select
                    id="tag"
                    name="tag"
                    onChange={(e)=>{
                            setFormData({...formData, [e.target.name]: e.target.value});
                    }}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px',
                        
                    }}
                >
                    <option value="Academico">Academico</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Deportivo">Deportivo</option>
                </select>
            </label>
            <figure className='debug flex flex-col items-center'>
                {usrImage ? <img src={usrImage} /> : <span>Sube la imagen del evento</span>}
                <CldUploadButton
                    uploadPreset="udeacercate2023"
                    onUpload={handleOnUpload}
                    className='ButtonCard'
                    // id="cloudinary"
                >
                    {/* <i className="bi bi-camera fs-5" id='CameraIcon' /> */}
                </CldUploadButton>
            </figure>
            <button className='debug ButtonCard' type='submit'>Crear</button>

    </form>
  )
}

export default FormEvent