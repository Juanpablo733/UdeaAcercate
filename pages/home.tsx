import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdOutlineSearch, MdExpandMore } from "react-icons/md";
import { ExtendedEvent, GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { Event, User } from "@/prisma/generated/type-graphql"
import { MiniCardConteiner } from '@/components/card/MiniCardContainer';
import { useSession } from 'next-auth/react';
import { GET_USER_BY_EMAIL } from '@/graphql/client/user';
import { useRouter } from 'next/router';
import { Loading } from '@/components/ui/Loading';
import Link from 'next/link';
import { useUserData } from '@/hooks/useUserData';
import CreateEventModal from '@/components/modals/CreateEventModal';
import FormEvent from '@/components/forms/FormEvent';
import { MiniCard } from '@/components/card/MiniCard';
import PrivateLayout from '@/layouts/PrivateLayout';

const Home = () => {
    const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
    const {loading: loadingUser, session, status, userData} = useUserData();
    const userId = userData?.user.id
    const { data: eventsData, loading, error } = useQuery<{ events: ExtendedEvent[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
    })
    
    if (loading || loadingUser) return (<Loading/>)

    console.log('antes de loading: ', eventsData);
    if (error) {
        console.log("Error en carga de eventos", error)
        return <p>error</p>
    }

    console.log('despues de loading: ', eventsData?.events);
    
    return (
        <PrivateLayout>
            <div className='flex flex-col gap-10 pb-4 Yellow-little'>
                <Navbar>
                    <Link href={`/perfil/${userId}`}>
                        <div className='flex gap-4 items-center justify-center'>
                            <span className=' text-white font-bold'>{session?.user?.name}</span>
                            <Image src={session?.user?.image!} alt={'avatar-image'} height={50} width={50} className='rounded-full' />
                        </div>
                    </Link>
                </Navbar>
                <div className=' flex gap-32  justify-center'>
                    <button
                        className=' flex gap-12 items-center text-xl text-center bg-white rounded-2xl'
                        onClick={()=>setOpenCreateEvent(true)}>
                        <span>Crear Evento</span>
                        <MdAddCircleOutline className="h-8 w-8" />
                    </button>
                    <CreateEventModal open={openCreateEvent} setOpen={setOpenCreateEvent}>
                        <FormEvent userData={userId}/>
                    </CreateEventModal>
                    <div className=' flex gap-10 p-2 items-center justify-center  text-xl text-center bg-white rounded-2xl'>
                        <span>Filtrar Por Evento</span>
                        <MdExpandMore className="h-8 w-8" />
                    </div>
                    <div className='flex p-2 items-center w-96 justify-between  text-xl text-center bg-white rounded-2xl'>
                        <span>Buscar</span>
                        <MdOutlineSearch className="h-10 w-16" />
                    </div>
                </div>
                <div className='  grid grid-cols-2 gap-4 justify-items-center" style="grid-auto-rows: 1fr;' >
                    {eventsData?.events.map((item) => {
                        // let etiqueta = item.tag.toUpperCase();
                        return (
                        <MiniCard
                            key={item.id}
                            id={item.id}
                            titulo={item.title}
                            asistentes={item.attendeesCount}
                            tipo={item.tag}
                            fecha={item.date.toString()}
                            minutes={item.minutes}
                            hours={item.hours}
                            day={item.day}
                            month={item.month}
                            year={item.year}
                            idAutor={item.author?.id??""}
                            nombreAutor={item.author?.name??""}
                            imagenAutor={item.author?.image??""}
                        />
                        );
                    })}
                </div>
            </div>

        </PrivateLayout>
    )
}

export default Home;