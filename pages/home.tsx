import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdOutlineSearch, MdExpandMore } from "react-icons/md";
import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"
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

const Home = () => {
    const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
    const router = useRouter();
    const {loading: loadingUser, session, status, userData} = useUserData();
    const { data: eventsData, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
    })
    const notVerified = !userData?.user?.emailVerified
    const userId = userData?.user.id
    console.log("Email no verificado: ", notVerified)
    console.log("Status:", status)
    console.log("Session: ", session)
    useEffect(() => {
        if (status === "authenticated") {
            if (!loadingUser && notVerified) {
                router.push('/verifyEmail')
            }
        }
    }, [])
    if (loading || loadingUser) return (<Loading/>)

    console.log('antes de loading: ', eventsData);
    if (error) {
        console.log("Error en carga de eventos", error)
        return <p>error</p>
    }

    console.log('despues de loading: ', eventsData?.events);
    
    return (
        <div className='flex flex-col gap-10 pb-4 Yellow-little'>
            <Navbar>
                <Link href={`/perfil/${userId}`}>
                    <div className='flex gap-4 items-center justify-center'>
                        <span className=' text-white font-bold'>{session?.user?.name}</span>
                        <Image src={session?.user?.image!} alt={'avatar-image'} height={50} width={50} className='rounded-full' />
                    </div>
                </Link>
            </Navbar>
            <div className=' flex gap-32 justify-center'>
                <button
                    className=' flex gap-12 items-center bg-white rounded-2xl'
                    onClick={()=>setOpenCreateEvent(true)}
                >
                    <span>crear evento</span>
                    <MdAddCircleOutline className="h-8 w-8" />
                </button>
                <CreateEventModal open={openCreateEvent} setOpen={setOpenCreateEvent}>
                    <FormEvent/>
                </CreateEventModal>
                <div className=' flex gap-12 items-center bg-white rounded-2xl'>
                    <span>filtrar por evento</span>
                    <MdExpandMore className="h-8 w-8" />
                </div>
            </div>
            <div className=' flex justify-center'>
                <div className=' flex items-center justify-center gap-12 bg-white rounded-2xl'>
                    <span>buscar</span>
                    <MdOutlineSearch className="h-8 w-8" />
                </div>
            </div>
            <div>
                <MiniCardConteiner data={eventsData?.events} />
                {/* <MiniCardConteiner data={data2}/> */}
            </div>
        </div>
    )
}

export default Home;