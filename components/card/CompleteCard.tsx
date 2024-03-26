
import Image from 'next/image'
import React, { useState } from 'react'
import { Avatar } from '../ui/Avatar'
import { MdOutlineDelete, MdOutlinePermIdentity, MdOutlinePlace, MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_EVENT_BY_OWNER, ExtendedEvent, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED, GET_EVENTS_PREVIEW, GET_EVENT_BY_ID } from '@/graphql/client/event'
import { Attendee, Comment } from "@/prisma/generated/type-graphql"
import { CommentContainer } from './CommentContainer'
import { useUserData } from '@/hooks/useUserData'
import { ADD_ATTENDEE, FIND_ATTENDEE, QUIT_ATTENDEE } from '@/graphql/client/attendee'
import { CREATE_COMMENT } from '@/graphql/client/comment'
import { toast } from 'react-toastify'
import DeleteEventWarningModal from '../modals/DeleteEventWarningModal'
import DeleteEventButton from '../buttons/DeleteEventButton';

interface completeCardProps {
    id: string,
    asistentes: number,
    idAutor: string,
    nombre: string,
    imagenAutor: string,
    imagenEvento: string,
    sessionUserId: string
}


const CompleteCard = ({ id, nombre, asistentes, imagenAutor, idAutor, imagenEvento, sessionUserId }: completeCardProps) => {
    const [comentario, setComentario] = useState('');
    const { data, loading, error } = useQuery<{ event: ExtendedEvent }>(GET_EVENT_BY_ID, {
        variables: { id },
        fetchPolicy: 'cache-first'
    })
    const { data: attendeeData, loading: loadingAttendee, error: errorAttendee } =
        useQuery<{ attendee: Attendee }>(FIND_ATTENDEE, {
            variables: { userId: sessionUserId, eventId: id },
            fetchPolicy: 'cache-first'

        })
    const [addAttendee] = useMutation<{ attendee: Attendee }>(ADD_ATTENDEE,
        {
            variables: { userId: sessionUserId, eventId: id },
        });

    const [quitAttendee] = useMutation<{ attendee: Attendee }>(QUIT_ATTENDEE,
        {
            variables: { userId: sessionUserId, eventId: id },
        });

    const [createComment] = useMutation<{ comment: Comment }>(CREATE_COMMENT,
        { variables: { userId: sessionUserId, eventId: id, text: comentario } });

    if (loading) return <p>Loading...</p>
    console.log("Evento:", data)
    if (error) {
        console.log("Error en carga de evento individual", error)
        return <p>error</p>
    }

    const executeAddAttendee = async () => {
        try {
            await addAttendee({
                refetchQueries: [GET_EVENT_BY_ID, FIND_ATTENDEE]

            });
            console.log("después de la mutación", data);

        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    const executeQuitAttendee = async () => {
        try {
            await quitAttendee(
                { refetchQueries: [GET_EVENT_BY_ID, FIND_ATTENDEE] }
            )
        }
        catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }

    }

    const executeCreateComment = async () => {
        try {
            const resultado = await createComment(
                { refetchQueries: [GET_EVENT_BY_ID] }
            );
            console.log('Data resultante de la mutación:', resultado.data);
        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    return (
        <div className='flex justify-evenly'>
            {/* lado izquierdo */}
            <div className='flex flex-col h-full w-[50%] pr-2'>
                <div className='w-[100%] h-[50%] rounded-lg'>
                    <Image className='rounded-lg'
                        width={1000}
                        height={0}
                        src={imagenEvento}
                        alt={'Imagen de evento'} />
                </div>
                <div className='flex justify-between p-2'>
                    <div className='flex gap-2 items-center'>
                        <MdOutlinePlace className="h-8 w-8" />
                        <span className='font-bold'>LUGAR:</span>
                        <span className='font-bold'>{data?.event.place}</span>
                    </div>
                    <div className='flex'>
                        <button className=' ButtonCard'
                            onClick={attendeeData?.attendee ? executeQuitAttendee : executeAddAttendee}>{attendeeData?.attendee ? "No Asistir" : "Asistir"}
                        </button>
                        <div className='flex items-center'>
                            <MdOutlinePermIdentity className={'h-8 w-8'} />
                            <span className='font-bold'>{data?.event.attendeesCount}</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 flex justify-start'>
                    <DeleteEventButton
                        idAutor={idAutor}
                        sessionUserId={sessionUserId}
                        eventId={id} />
                </div>
            </div>
            {/* lado derecho */}
            <div className='flex flex-col h-full w-[50%] pl-2 gap-2'>
                <Avatar
                    name={nombre}
                    imageUrl={imagenAutor}
                    userId={idAutor}
                />
                <div>
                    {data?.event.description}
                </div>

                <div className='pl-4'>
                    <CommentContainer
                        data={data?.event.comments}
                        sessionUserId={sessionUserId} />
                </div>
                <div className='flex'>
                    <input
                        className=' w-full rounded-2xl text-center bg-gray-100 border border-black  '
                        type="text"
                        value={comentario}
                        placeholder='comentar'
                        onChange={(e) => {
                            setComentario(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            executeCreateComment();
                            console.log('comentario: ', comentario);
                        }}>
                        <MdOutlineSubdirectoryArrowLeft className={'h-8 w-8'} />
                    </button>
                </div>

            </div>
        </div >
    )
}

export default CompleteCard