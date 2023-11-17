"use client"
import React, { FormEvent, useState } from 'react'

interface FormDataInterface {
    [key: string] : string;
}
const FormEvent = () => {
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('formaData: ',formData);
        const imageData = new FormData();
        if (file) {
            imageData.append("image", file);
            const response = await fetch("/api/upload", {
              method: "POST",
              body: imageData,
            });
            const data = await response.json();
            console.log(data);
            setImageUrl(data.url);
          } else {
            console.error("No se ha seleccionado ningún archivo.");
          }
    }
    const [formData, setFormData] = useState<FormDataInterface>({title: '', description: '', place: '', date: ''});
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
  return (
    <form onSubmit={submitForm} className='debug'>
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

            <input type="file" onChange={(e) => {
                setFile(e.target.files[0])
            }}/>

            <button className='debug' type='submit'>Crear</button>
            {
                imageUrl && (
                    <img src={imageUrl} alt="imagen" />
                )
            }

    </form>
  )
}

export default FormEvent