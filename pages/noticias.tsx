import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdExpandMore, MdOutlineSearch } from "react-icons/md";
import { ExtendedEvent } from "@/graphql/client/event"
import { useQuery } from "@apollo/client"
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { Loading } from '@/components/ui/Loading';
import { useUserData } from '@/hooks/useUserData';
import CreateEventModal from '@/components/modals/CreateEventModal';
import PrivateLayout from '@/layouts/PrivateLayout';
import SearchBar from '@/components/searchbar/SearchBar';
import FormNotice from '@/components/forms/formNotice';
import {CardNotice} from '@/components/card/CardNotice';
import { useIsAdminUser } from '@/hooks/useIsAdminUser';
import { GET_ALL_NOTICE_PREVIEWS } from '@/graphql/client/information';
import { Information } from '@/prisma/generated/type-graphql';


const Noticias = () => {
    const { loading: loadingUser, session, status, userData } = useUserData();
    const userId = userData?.user.id
    const { data: roleData, loading: loadingRole } = useIsAdminUser(userId)
    const isAdmin = roleData?.isUserAdmin
    const [dataFiltrada, setDataFiltrada] = useState<{ notices: Information[] }>();
    const [openCreateEvent, setOpenCreateEvent] = useState<boolean>(false);
    const [tag, setTag] = useState('');
    const [hashtags, setHashtags] = useState([]);
    const { data: noticeData, loading: loadingAll, error: errorAll } = useQuery<{ notices: Information[] }>(GET_ALL_NOTICE_PREVIEWS, {
        fetchPolicy: 'no-cache',
        variables: { sessionUserId: userId, tag, hashtags }
    })
    console.log("noticias",noticeData)

    useEffect(() => {
        if (noticeData && noticeData.notices) {
            setDataFiltrada({ notices: noticeData.notices });
        }
    }, [noticeData]);

    console.log("[Home] tag:", tag)
    if (loadingUser || status === "loading") return (<Loading />)
    if (loadingAll) return (<Loading />)
    if (session && errorAll) {
        console.log("Error en carga de eventos", errorAll)
        return <p>error {errorAll.message}</p>
    }
    const handleSearch = (searchTerm) => {
        if (!noticeData || loadingAll || !noticeData.notices) return;

        const filteredList = noticeData.notices.filter((event) =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDataFiltrada({ notices: filteredList });
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
                    {
                        isAdmin ?
                            <div className='flex gap-8 md:gap-12'>
                                <button
                                    className=' flex gap-4 items-center text-xl text-center bg-white rounded-2xl shadow-lg'
                                    onClick={() => setOpenCreateEvent(true)}>
                                    <span className='text-base sm:text-xl '>Crear Noticia</span>
                                    <MdAddCircleOutline className="h-4 w-4 sm:h-8 sm:w-8" />
                                </button>
                                <CreateEventModal titulo='Crear Noticia' open={openCreateEvent} setOpen={setOpenCreateEvent}>
                                    <FormNotice setModalOpen={setOpenCreateEvent} />
                                </CreateEventModal>
                            </div>
                            : <></>
                    }
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className='CardsGrid px-2 sm:px-4 py-4'>
                    {
                        noticeData?.notices.map((item) => {
                            return (
                                <CardNotice
                                    key={item.id}
                                    data={item}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </PrivateLayout>
    )
}
export default Noticias