import { Card } from '@/components/card/Card';
import { MiniCard } from '@/components/card/MiniCard';
import { Navbar } from '@/components/navbar/Navbar';
import PrivateLayout from '@/layouts/PrivateLayout';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { MdAddCircleOutline, MdOutlineSearch, MdExpandMore } from "react-icons/md";
import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { Event, User } from "@/prisma/generated/type-graphql"
import { MiniCardConteiner } from '@/components/card/MiniCardContainer';
import { Interface } from 'readline';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from '@mui/material';
import { GET_USER_BY_EMAIL } from '@/graphql/client/users';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();
    const { data: Session, status } = useSession();
    const { data, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
    })
    const email = Session?.user?.email
    const { data: userData } = useQuery<{ user: User }>(GET_USER_BY_EMAIL,
        { variables: { email }, skip: !email })
    const notVerified = !userData?.user?.emailVerified
    console.log("Email no verificado: ", notVerified)
    console.log("Status:", status)
    useEffect(() => {
        if (status === "authenticated") {
            if (notVerified) {
                router.push('/verifyEmail')
            }
        }
    }, [])

    const CloseSession = () => { signOut({ callbackUrl: '/' }) }
    console.log("Session: ", Session)
    if (status === 'loading') return <p>Loading...</p>

    console.log('antes de loading: ', data);
    if (error) {
        console.log("Error en carga de eventos", error)
        return <p>error</p>
    }
    if (loading) return <p>Loading...</p>
    console.log('despues de loading: ', data?.events);

    return (
        <div className='flex flex-col gap-10 pb-4 Yellow-little'>
            <Button onClick={CloseSession}>
                Cerrar sesión
            </Button>
            <Navbar>
                <div className='flex gap-4 items-center'>
                    <span className=' text-white font-bold'>{Session?.user?.name}</span>
                    <Image src={Session?.user?.image} alt={'avatar-image'} height={50} width={50} className='' />
                </div>
            </Navbar>
            <div className=' flex gap-32 justify-center'>
                <div className=' flex gap-12 items-center bg-white rounded-2xl'>
                    <span>crear evento</span>
                    <MdAddCircleOutline className="h-8 w-8" />
                </div>
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
                <MiniCardConteiner data={data?.events} />
                {/* <MiniCardConteiner data={data2}/> */}
            </div>
        </div>
    )
}

export default Home;