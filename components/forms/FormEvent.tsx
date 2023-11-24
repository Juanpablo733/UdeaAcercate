import React, { FormEvent, useState } from 'react'
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
// import { useUserData } from '@/hooks/useUserData';

interface FormDataInterface {
    [key: string] : string;
}
const FormEvent = (userData: string) => {
    // const {userData} = useUserData();
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
    <form onSubmit={submitForm} className='debug w-[400px]'>
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
                >
                    <option value="Academico">Academico</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Deportivo">Deportivo</option>
                </select>
            </label>
            <figure>
                {usrImage ? <img src={usrImage} /> : <i className="bi bi-person-circle fs-1"></i>}
                <CldUploadButton
                    uploadPreset="udeacercate2023"
                    onUpload={handleOnUpload}
                    className='debug'
                    // id="cloudinary"
                >
                    <i className="bi bi-camera fs-5" id='CameraIcon' />
                </CldUploadButton>
            </figure>
            <button className='debug' type='submit'>Crear</button>

    </form>
  )
}

export default FormEvent