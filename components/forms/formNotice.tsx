import React, { Dispatch, SetStateAction, useState } from 'react'
import { CldUploadButton } from 'next-cloudinary';
import { useMutation } from '@apollo/client';
import { useUserData } from '@/hooks/useUserData';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { MdImage } from 'react-icons/md';
import { CREATE_INFORMATION } from '@/graphql/client/information';


interface FormInterface {
    setModalOpen: Dispatch<SetStateAction<boolean>>
}


const FormNotice = ({ setModalOpen }: FormInterface) => {
    const [CrearNoticia] = useMutation(CREATE_INFORMATION);
    const { userData } = useUserData();
    const userId = userData?.user.id
    const [usrImage, setUsrImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleOnUpload(result: any, operations: any) {
        setUsrImage(result?.info.secure_url);
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await CrearNoticia({
                variables: {
                    title,
                    description,
                    image: usrImage,
                    authorId: userId,
                }
            });
            toast.success('Noticia creado satisfactoriamente!');
            setModalOpen(false)
        } catch (error) {
            toast.error('No se ha creado la Noticia');
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

export default FormNotice