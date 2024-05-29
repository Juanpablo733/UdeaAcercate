import Image from 'next/image'
import React, { useState } from 'react'
import { Avatar } from '../ui/Avatar'
import { MdOutlinePermIdentity, MdOutlinePlace, MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
import { useMutation, useQuery } from '@apollo/client'
import { ExtendedEvent, GET_EVENT_BY_ID } from '@/graphql/client/event'
import { Attendee, Comment } from "@/prisma/generated/type-graphql"
import { CommentContainer } from './CommentContainer'
import { ADD_ATTENDEE, FIND_ATTENDEE, QUIT_ATTENDEE } from '@/graphql/client/attendee'
import { CREATE_COMMENT } from '@/graphql/client/comment'
import DeleteEventButton from '../buttons/DeleteEventButton';
import { CLASIFFY_COMMENT_SENTIMENT } from '@/graphql/client/commentSentiment'
import { toast } from 'react-toastify'

interface completeCardProps {
    id: string,
    asistentes: number,
    idAutor: string,
    nombre: string,
    imagenAutor: string,
    imagenEvento: string,
    sessionUserId: string,
    minutes: string,
    hours: string,
    day: string,
    month: string,
    year: string,
}


// const CompleteCard = ({ id, nombre, asistentes, imagenAutor, idAutor, imagenEvento, sessionUserId }: completeCardProps) => {
const CompleteCard = ({ id, nombre, asistentes, imagenAutor, idAutor, imagenEvento, sessionUserId, day, hours, minutes, month, year }: completeCardProps) => {
    const [comentario, setComentario] = useState('');
    const { data, loading, error } = useQuery<{ event: ExtendedEvent }>(GET_EVENT_BY_ID, {
        variables: { eventId: id },
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

    const [createComment] = useMutation(CREATE_COMMENT,
        { variables: { userId: sessionUserId, eventId: id, text: comentario } });

    const [classifyCommentSentiment] = useMutation(CLASIFFY_COMMENT_SENTIMENT)

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log("Error en carga de evento individual", error)
        return <p>error</p>
    }

    const executeAddAttendee = async () => {
        try {
            const resultado = await addAttendee({
                refetchQueries: [GET_EVENT_BY_ID, FIND_ATTENDEE]
            });
            console.log("AddAttendee: ", resultado);

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
            const commentId = resultado.data.createComment.id
            const classifyResult = await classifyCommentSentiment(
                { variables: { commentId } }
            )
            console.log("Clasificación de comentario:", classifyResult)
            setComentario("")
        } catch (error) {
            toast.error("No se ha logrado crear el comentario. por favor intenta más tarde.")
            console.error('Error al ejecutar la mutación:', error);
        }
    }
    const image = imagenEvento == '' ? '/evento1.png' : imagenEvento

    return (
        // <section className='flex justify-evenly debug'>
        <section className='flex flex-col md:flex-row'>
            {/* lado izquierdo */}
            <div className='flex flex-col h-full md:w-[60%] pr-2'>
                {/* <div className='w-[100%] h-[50%] rounded-lg debug'> */}
                <div className='w-[100%] rounded-lg'>
                    <Image className='rounded-lg'
                        width={1000}
                        height={0}
                        src={image}
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
            {/* <div className='flex flex-col h-full md:w-[40%] pl-2 gap-2 debug'> */}
            <div className='flex flex-col h-full md:w-[40%] pl-2 gap-2'>
                <Avatar
                    name={nombre}
                    imageUrl={imagenAutor}
                    userId={idAutor}
                />
                <div className='flex gap-4'>
                    <span className="text-black font-bold">
                        {`${year}-${month}-${day}`}
                    </span>
                    <span className="text-black font-bold">
                        {`${hours}:${minutes}`}
                    </span>
                </div>
                <div>
                    {data?.event.info.description}
                </div>

                <div className='pl-4'>
                    <CommentContainer
                        data={data?.event.info.comments}
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
        </section>
    )
}

export default CompleteCard