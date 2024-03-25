import React, { FormEvent as ReactFormEvent, useState } from 'react'
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { spawn } from 'child_process';
import { CREATE_EVENT } from '@/graphql/client/event';
import { useMutation, useQuery } from '@apollo/client';
import { useUserData } from '@/hooks/useUserData';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { MdImage } from 'react-icons/md';

// import { useUserData } from '@/hooks/useUserData';

interface FormDataInterface {
    [key: string]: string;
}

const FormEvent = () => {
    const [crearEvento] = useMutation(CREATE_EVENT);
    const { loading: loadingUser, session, status, userData } = useUserData();
    const userId = userData?.user.id
    const router = useRouter();

    const [usrImage, setUsrImage] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');

    function handleOnUpload(result: any, operations: any) {
        // if (!result.event === "success") {
        // //   updateError(result?.info);
        //   return;
        // }
        setUsrImage(result?.info.secure_url);
        // setValue("userImage", result?.info.secure_url);
        // console.log("url imagen", usrImage);
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await crearEvento({
                variables: {
                    title,
                    description,
                    place,
                    date,
                    image: usrImage,
                    tag,
                    authorId: userId,
                },
            });
            toast.success('¡Evento creado satisfactoriamente!');
            router.push('/home');
        } catch (error) {
            toast.error('No se ha creado el evento');
        }
    };
    return (
        <form onSubmit={handleSubmit} className='w-[260px] flex flex-col items-center gap-2 p-2 sm:w-[500px]'>
            <input
                className='w-full text-center text-[#1F1F3B] text-lg font-medium border-b-2 border-b-[#5F5F5F] focus:outline-none focus:border-b-[#1F1F3B]'
                type="text"
                name='title'
                placeholder='Título'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                className='w-full text-center text-[#1F1F3B] text-lg font-medium border-b-2 border-b-[#5F5F5F] focus:outline-none focus:border-b-[#1F1F3B]'
                type="text"
                name='place'
                placeholder='Lugar'
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
            />
            <select
                className='w-full text-center text-[#1F1F3B] text-lg font-medium border-b-2 border-l-2 border-t-2 border-r-2 border-[#FFFFFF] border-b-[#5F5F5F] focus:outline-none focus:border-b-[#1F1F3B]'
                id="tag"
                name="tag"
                onChange={(e) => setTag(e.target.value)}
                required
            >
                <option disabled selected value={''} className='text-[#5F5F5F]'>Tipo</option>
                <option value="Academico">Academico</option>
                <option value="Cultural">Cultural</option>
                <option value="Deportivo">Deportivo</option>
            </select>
            <input
                className='w-full text-center text-[#1F1F3B] text-lg font-medium border-b-2 border-b-[#5F5F5F] focus:outline-none focus:border-b-[#1F1F3B]'
                type="datetime-local"
                name='date'
                placeholder='Fecha'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <div className='pt-5 w-full'>
                <textarea
                    className='w-full text-center text-[#1F1F3B] text-lg font-medium border-2 rounded-xl border-[#5F5F5F] focus:outline-none focus:border-[#1F1F3B]'
                    name='description'
                    placeholder='Descripción'
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <figure className='w-full flex flex-col items-center'>
                <CldUploadButton
                    uploadPreset="udeacercate2023"
                    onUpload={handleOnUpload}
                >
                    {usrImage
                        ? <Image src={usrImage} alt={'imagen'} width={300} height={10} />
                        : <MdImage className='h-20 w-20' />}
                </CldUploadButton>
                {usrImage
                    ? <span className='text-[#5F5F5F] font-medium'>Toca la imagen para cambiarla</span>
                    : <span className='text-[#5F5F5F] font-medium'>Sube una imagen</span>}
            </figure>
            <button
                className='ButtonCard w-[50%]'
                type='submit'
            >Crear</button>
        </form >
    )
}

export default FormEvent