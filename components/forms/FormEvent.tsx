import React, { Dispatch, SetStateAction, useState } from 'react'
import { CldUploadButton } from 'next-cloudinary';
import { CREATE_EVENT, GET_EVENTS_PREVIEW } from '@/graphql/client/event';
import { useMutation } from '@apollo/client';
import { useUserData } from '@/hooks/useUserData';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { MdImage } from 'react-icons/md';
import { DatePicker } from '../atoms/datePicker';

interface FormInterface {
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const FormEvent = ({ setModalOpen }: FormInterface) => {
    const [crearEvento] = useMutation(CREATE_EVENT);
    const { userData } = useUserData();
    const userId = userData?.user.id

    const [usrImage, setUsrImage] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');

    function handleOnUpload(result: any, operations: any) {
        setUsrImage(result?.info.secure_url);
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
                refetchQueries: [GET_EVENTS_PREVIEW]
            });
            toast.success('¡Evento creado satisfactoriamente!');
            setModalOpen(false)
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
            <DatePicker type='datetime-local' date={date} setDate={setDate}/> 
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