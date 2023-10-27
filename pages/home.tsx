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
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { useSession } from 'next-auth/react';


const Home = () => {
    const { data, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
    })
    console.log('antes de loading: ', data);
    if (error) {
        console.log(error)
        return <p>error</p>
    }
    if (loading) return <p>Loading...</p>
    console.log('despues de loading: ', data?.events);

    // const {data: Session, status} = useSession();
    // console.log("Session: ", Session)
    // if(status === 'loading') return <p>Loading...</p>
    /*
    const data2 = [
        {
          id: '1',
          nombre: 'Juan Pablo Bedoya',
          titulo: 'Partido de Futbol',
          asistentes: 12,
          tipo: 'deportivo',
          fecha: '10-11-2023',
        },
        {
          id: '2',
          nombre: 'Santiago Bedoya Díaz',
          titulo: 'Estudio parcial Cálculo',
          asistentes: 7,
          tipo: 'academico',
          fecha: '28-10-2023',
        },{

            id: '3',
            nombre: 'Jose Manuel Gonzalez',
            titulo: 'Clases de Guitarra',
            asistentes: 30,
            tipo: 'cultural',
            fecha: '2023-10-19',
        },
        {
            id: '4',
            nombre: 'Camilo Mejia',
            titulo: 'Juego de Basket',
            asistentes: 5,
            tipo: 'deportivo',
            fecha: '15-11-2023',
          },
          {
            id: '4',
            nombre: 'Carlos Cano',
            titulo: 'Grupo de Estudio Desarrollo Web',
            asistentes: 15,
            tipo: 'academico',
            fecha: '01-11-2023',
          }
        // ... más objetos
      ];
    */

    return (
        <div className='flex flex-col gap-10 pb-4 Yellow-little'>
            <Navbar>
                <div className='flex gap-4 items-center'>
                    <span className=' text-white font-bold'>Juan Pablo Bedoya</span>
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
            <div>
                <MiniCardConteiner data={data?.events} />
                {/* <MiniCardConteiner data={data2}/> */}
            </div>
        </div>
    )
}

export default Home;