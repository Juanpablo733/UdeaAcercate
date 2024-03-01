import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { ExtendedEvent, GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { Loading } from '@/components/ui/Loading';
import Link from 'next/link';
import { useUserData } from '@/hooks/useUserData';
import CreateEventModal from '@/components/modals/CreateEventModal';
import FormEvent from '@/components/forms/FormEvent';
import PrivateLayout from '@/layouts/PrivateLayout';

const Home = () => {
    const [dataFiltrada, setDataFiltrada] = useState('');
    const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
    const { loading: loadingUser, session, status, userData } = useUserData();
    const userId = userData?.user.id
    const [tag, setTag] = useState('');
    const [hashtags, setHashtags] = useState([]);
    const { data: eventsData, loading: loadingAll, error: errorAll } = useQuery<{ events: ExtendedEvent[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first',
        variables: { tag, hashtags }
    })

    if (loadingAll || loadingUser) return (<Loading />)
    console.log('antes de loading: ', eventsData);
    if (errorAll) {
        console.log("Error en carga de eventos", errorAll)
        return <p>error {errorAll.message}</p>
    }

    console.log('despues de loading: ', eventsData?.events);

    return (
        <PrivateLayout>
            <title>
                Home | UdeAcercate
            </title>
            <div className='flex flex-col gap-10 pb-4 Yellow-little h-full'>
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
                        onClick={() => setOpenCreateEvent(true)}>
                        <span>Crear Evento</span>
                        <MdAddCircleOutline className="h-8 w-8" />
                    </button>
                    <CreateEventModal open={openCreateEvent} setOpen={setOpenCreateEvent}>
                        <FormEvent />
                    </CreateEventModal>
                    <select className='rounded-2xl' onChange={(e) => setTag(e.target.value)}>
                        <option value="" disabled selected>Filtrar por Tag</option>
                        <option value="Academico">Academico</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Deportivo">Deportivo</option>
                        <option value="">Todos</option>
                    </select>
                    {/* <div className=' flex gap-10 p-2 items-center justify-center  text-xl text-center bg-white rounded-2xl'>
                        <span>Filtrar Por Evento</span>
                        <MdExpandMore className="h-8 w-8" />
                    </div> */}
                    {/* <input placeholder='Buscar' className='p-2 items-center w-96 text-xl text-center bg-white rounded-2xl'>

                    </input> */}
                    {/* <div className='flex p-2 items-center w-96 justify-between  text-xl text-center bg-white rounded-2xl'>
                        <span>Buscar</span>
                        <MdOutlineSearch className="h-10 w-16" />
                    </div> */}
                </div>
                <div>
                    <MiniCardContainer data={eventsData?.events} />
                </div>
            </div>

        </PrivateLayout>
    )
}

export default Home;