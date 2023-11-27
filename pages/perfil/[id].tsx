import { Navbar } from '@/components/navbar/Navbar'
import { MdHomeFilled } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GET_PROFILE } from '@/graphql/client/profile';
import { Profile } from '@/prisma/generated/type-graphql';
import { Loading } from '@/components/ui/Loading';
import { ExtendedEvent, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED } from '@/graphql/client/event';
import { MiniCard } from '@/components/card/MiniCard';
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { useState } from 'react';

const Perfil = () => {
    // const { data: Session, status } = useSession();
    const router = useRouter();
    const [eventType, setEventType] = useState('created');
    const id = router.query.id;
    const { data: profileData, loading: loadingProfile, error: errorProfile } = useQuery<{ profile: Profile }>(
        GET_PROFILE, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    );
    const { data: eventsCreatedData, loading: loadingCreated, error: errorCreated } = useQuery<{ eventsCreated: ExtendedEvent[] }>(
        GET_EVENTS_CREATED, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    )
    const { data: eventsAttendingData, loading: loadingAttending, error: errorAttending } = useQuery<{ eventsAttending: ExtendedEvent[] }>(
        GET_EVENTS_ATTENDING, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    )
    console.log("Id:" + id)
    if (loadingCreated || loadingProfile) return (<Loading />)
    const profile = profileData?.profile
    const user = profile?.user
    const setCreatedType = async () => {
        await setEventType('created')
        console.log('Tipo de evento',eventType)
    }
    const setAttendingType = async () => {
        await setEventType('attending')
        console.log('Tipo de evento',eventType)
    }

    console.log("Profile:", profileData)
    console.log("errorProfile:", errorProfile)
    console.log("errorCreated:", errorCreated)
    console.log("eventsAttending:", eventsAttendingData)
    return (

        <div className='Yellow-little gap-15 flex flex-col h-screen'>
            <div>
                <Navbar>
                    <Link href={'/home'}>
                        <div className='h-full flex items-center justify-center'>
                            <MdHomeFilled className="h-9 w-9 mr-20" />
                        </div>
                    </Link>
                </Navbar>
            </div>

            <div className='debug h-full flex flex-row'>
                <div className='debug w-1/3 flex flex-col items-center p-4 gap-4'>
                    <Image src={user?.image!} alt={'avatar-image'} height={200} width={200} className='debug rounded-full' />
                    <span className='text-xl font-extrabold'>{user?.name}</span>
                    <span className='text-sm font-bold'>{profile?.faculty}</span>
                    <span className='text-sm font-bold'>{profile?.career}</span>
                    <span className='text-sm font-bold'>{profile?.campus?.replace('_', ' ')}</span>
                    <span className='text-sm font-bold'>{profile?.type}</span>
                    <span className='text-sm font-bold mr-7 ml-7'>
                        {profile?.description}
                    </span>
                    <span className='text-sm font-bold mr-7 ml-7'>
                        {profile?.hobbies}
                    </span>
                    <span className='text-sm font-bold mr-7 ml-7'>
                        {profile?.socialLinks}
                    </span>
                </div>
                <div className='debug w-full'>
                    <div className='debug w-full p-4 grid grid-cols-2 gap-4 justify-items-center'>
                        <button className='debug ButtonCard  flex items-center h-14 w-60 justify-center'
                            onClick={setCreatedType}>
                            Eventos Creados
                        </button>
                        <button className='debug ButtonCard  flex items-center h-14 w-60 justify-center'
                            onClick={setAttendingType}>
                            Eventos a asistir
                        </button>
                    </div>
                    <div>
                        <MiniCardContainer data=
                            {eventType === 'created'
                                ? eventsCreatedData?.eventsCreated
                                : eventsAttendingData?.eventsAttending}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Perfil