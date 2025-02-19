import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdExpandMore, MdOutlineSearch } from "react-icons/md";
import { ExtendedEvent, GET_OFFICIAL_EVENTS_PREVIEW } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { Loading } from '@/components/ui/Loading';
import { useUserData } from '@/hooks/useUserData';
import CreateEventModal from '@/components/modals/CreateEventModal';
import FormEvent from '@/components/forms/FormEvent';
import PrivateLayout from '@/layouts/PrivateLayout';
import SearchBar from '@/components/searchbar/SearchBar';

const Oficial = () => {
  const [dataFiltrada, setDataFiltrada] = useState<{ officialEvents: ExtendedEvent[]}>();

  const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
  const { loading: loadingUser, session, status, userData } = useUserData();
  const userId = userData?.user.id
  const [tag, setTag] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const { data: eventsData, loading: loadingAll, error: errorAll } = useQuery<{ officialEvents: ExtendedEvent[] }>(GET_OFFICIAL_EVENTS_PREVIEW, {
      fetchPolicy: 'no-cache',
      variables: { sessionUserId: userId, tag, hashtags }
  })
  console.log(eventsData)

  useEffect(() => {
      if (eventsData && eventsData.officialEvents) {
          setDataFiltrada({officialEvents: eventsData.officialEvents});
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
      if (!eventsData || loadingAll || !eventsData.officialEvents) return;
  
      const filteredList = eventsData.officialEvents.filter((event) =>
        event.info.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDataFiltrada({officialEvents: filteredList});
      console.log('data filtrada: ', dataFiltrada);
      console.log('filteredList: ', filteredList);
      
    };
  return (
      <PrivateLayout isAdminPage={false}>
          <title>
              oficial | UdeAcercate
          </title>
          <div className='flex flex-col gap-10 pb-4 Yellow-little min-h-screen'>
              <div className='flex flex-col md:flex-row gap-12 justify-center items-center mt-[104px]'>
                  <div className='flex gap-8 h-10 md:gap-12'>
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
                  data={dataFiltrada?.officialEvents}
                  sessionUserId={userId}
              />
          </div>
      </PrivateLayout>
  )
}

export default Oficial