
import Image from 'next/image'
import React, { useState } from 'react'
import { Avatar } from '../ui/Avatar'
import { MdOutlinePermIdentity, MdOutlinePlace, MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
import { useQuery } from '@apollo/client'
import { GET_EVENT_BY_ID } from '@/graphql/client/event'
import { Event } from "@/prisma/generated/type-graphql"
import { CommentContainer } from './CommentContainer'
interface completeCardProps {
    id: string,
    nombre: string,
    asistentes: number,
    imagenAutor: string
}


const CompleteCard = ({ id, nombre, asistentes, imagenAutor }: completeCardProps) => {
    const [comentario, setComentario] = useState('');
    const { data, loading, error } = useQuery<{ event: Event }>(GET_EVENT_BY_ID, {
        variables: { id },
        fetchPolicy: 'cache-first'
    })
    if (loading) return <p>Loading...</p>
    console.log("Evento:", data)
    if (error) {
        console.log("Error en carga de evento individual", error)
        return <p>error</p>
    }
    return (
        <div className='debug flex'>
            {/* lado izquierdo */}
            <div className='debug flex flex-col h-full w-full'>
                <Image src={'/evento1.png'} width={1000} height={0} alt={''} />
                <div className='flex justify-between p-2'>
                    <div className='flex gap-2 items-center'>
                        <MdOutlinePlace className="h-8 w-8" />
                        <span className='font-bold'>LUGAR:</span>
                        <span className='font-bold'>{data?.event.place}</span>
                    </div>
                    <div className='flex'>
                        <button className=' ButtonCard'>Asistir</button>
                        <div className='flex items-center'>
                            <MdOutlinePermIdentity className={'h-8 w-8'} />
                            <span className='font-bold'>{asistentes}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* lado derecho */}
            <div className='debug flex flex-col h-full w-full p-2 gap-2'>
                <Avatar name={nombre} imageUrl={imagenAutor} />
                <div>
                    {data?.event.description}
                </div>

                <CommentContainer data={data?.event.comments}/>
                {/* <ul className='debug rounded-lg bg-gray-300'>
                    <li>
                        <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'} />
                        <div>
                            Lorem ipsum dolor sit amet. Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                        </div>
                    </li>
                    <li>
                        <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'} />
                        <div>
                            Lorem ipsum dolor sit amet. Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                        </div>
                    </li>
                    <li>
                        <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'} />
                        <div>
                            Lorem ipsum dolor sit amet. Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                        </div>
                    </li>
                </ul> */}
                <div className='flex'>
                    <input
                        className=' w-full rounded-2xl text-center bg-green-100'
                        type="text"
                        value={comentario}
                        placeholder='comentar'
                        onChange={(e) => {
                            setComentario(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log('comentario: ', comentario);
                        }}>
                        <MdOutlineSubdirectoryArrowLeft className={'h-8 w-8'} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CompleteCard