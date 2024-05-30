import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdExpandMore, MdOutlineSearch } from "react-icons/md";
import { ExtendedEvent, GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { Loading } from '@/components/ui/Loading';
import Link from 'next/link';
import { useUserData } from '@/hooks/useUserData';
import CreateEventModal from '@/components/modals/CreateEventModal';
import FormEvent from '@/components/forms/FormEvent';
import PrivateLayout from '@/layouts/PrivateLayout';
import SearchBar from '@/components/searchbar/SearchBar';

const Home = () => {
    const [dataFiltrada, setDataFiltrada] = useState<{ events: ExtendedEvent[]}>();

    const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
    const { loading: loadingUser, session, status, userData } = useUserData();
    const userId = userData?.user.id
    const [tag, setTag] = useState('');
    const [hashtags, setHashtags] = useState([]);
    const { data: eventsData, loading: loadingAll, error: errorAll } = useQuery<{ events: ExtendedEvent[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'no-cache',
        variables: { sessionUserId: userId, tag, hashtags }
    })

    useEffect(() => {
        if (eventsData && eventsData.events) {
            setDataFiltrada({events: eventsData.events});
        }
      }, [eventsData]);

    console.log("[Home] tag:", tag)
    if (loadingUser || status === "loading") return (<Loading />)
    if (loadingAll) return (<Loading />)
    if (session && errorAll) {
        console.log("Error en carga de eventos", errorAll)
        return <p>error {errorAll.message}</p>
    }
    const handleSearch = (searchTerm) => {
        if (!eventsData || loadingAll || !eventsData.events) return;
    
        const filteredList = eventsData.events.filter((event) =>
          event.info.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDataFiltrada({events: filteredList});
        console.log('data filtrada: ', dataFiltrada);
        console.log('filteredList: ', filteredList);
        
      };
    return (
        <PrivateLayout>
            <title>
                Home | UdeAcercate
            </title>
            <div className='flex flex-col gap-10 pb-4 Yellow-little min-h-screen'>
                <div className='flex flex-col md:flex-row gap-12 justify-center items-center mt-[104px]'>
                    <div className='flex gap-8 md:gap-12'>
                        <button
                            className=' flex gap-4 items-center text-xl text-center bg-white rounded-2xl shadow-lg'
                            onClick={() => setOpenCreateEvent(true)}>
                            <span className='text-base sm:text-xl '>Crear Evento</span>
                            <MdAddCircleOutline className="h-4 w-4 sm:h-8 sm:w-8" />
                        </button>
                        <CreateEventModal open={openCreateEvent} setOpen={setOpenCreateEvent}>
                            <FormEvent setModalOpen={setOpenCreateEvent}/>
                        </CreateEventModal>
                        <select className='rounded-2xl text-base sm:text-xl shadow-lg' onChange={(e) => setTag(e.target.value)}>
                            <option value="" disabled selected>Filtrar por Tag</option>
                            <option value="Academico">Academico</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Deportivo">Deportivo</option>
                            <option value="">Todos</option>
                        </select>
                    </div>
                    <SearchBar onSearch={handleSearch}/> 
                </div>
                <MiniCardContainer
                    // data={eventsData?.events}
                    data={dataFiltrada?.events}
                    sessionUserId={userId}
                />
            </div>
        </PrivateLayout>
    )
}
export default Home;