import { Card } from '@/components/card/Card';
import { MiniCard } from '@/components/card/MiniCard';
import { Navbar } from '@/components/navbar/Navbar';
import PrivateLayout from '@/layouts/PrivateLayout';
import Image from 'next/image';
import React from 'react'
import { MdAddCircleOutline, MdOutlineSearch, MdExpandMore } from "react-icons/md";
import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { Event } from "@/prisma/generated/type-graphql"
import { MiniCardConteiner } from '@/components/card/MiniCardContainer';
import { Interface } from 'readline';
import {MiniCardConteinerI} from '../components/card/MiniCardContainer';

const EventsPage = () => {
    const { data, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
        
    })
    console.log(data);
    if (error){
        console.log(error)
        return <p>error</p>
    }
    if (loading) return <p>Loading...</p>
}


const Home = () => {
    return (
            <div className='flex flex-col gap-10 pb-4 Yellow-little'>
                <Navbar>
                    <div className='flex gap-4 items-center'>
                        <span className=' text-white font-bold'>Juan Pablo Bedoya Sanchez</span>
                        <Image src={'/juan.png'} alt={'avatar-image'} height={50} width={50} className='' />
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
                <div className='  grid grid-cols-2 gap-4 justify-items-center'>
                    <MiniCardConteiner data={EventsPage()}/>

                </div>
            </div>
    )
}

export default Home;