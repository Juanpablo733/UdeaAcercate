import { Navbar } from '@/components/navbar/Navbar'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '@/graphql/client/profile';
import { Profile } from '@/prisma/generated/type-graphql';
import { Loading } from '@/components/ui/Loading';
import { ExtendedEvent, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED } from '@/graphql/client/event';
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { useState } from 'react';
import { useUserData } from '@/hooks/useUserData';

const Perfil = () => {
    const { userData } = useUserData();
    const router = useRouter();
    const [eventType, setEventType] = useState('created');
    const id = router.query.id;
    const { data: profileData, loading: loadingProfile, error: errorProfile } = useQuery<{ profile: Profile }>(
        GET_PROFILE, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    );
    const { data: eventsCreatedData, loading: loadingCreated, error: errorCreated } = useQuery<{ eventsCreated: ExtendedEvent[] }>(
        GET_EVENTS_CREATED, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    )
    const { data: eventsAttendingData } = useQuery<{ eventsAttending: ExtendedEvent[] }>(
        GET_EVENTS_ATTENDING, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    )
    if (loadingCreated || loadingProfile) return (<Loading />)
    const profile = profileData?.profile
    const user = profile?.user
    const setCreatedType = async () => {
        setEventType('created')
    }
    const setAttendingType = async () => {
        setEventType('attending')
    }
    if(errorProfile || errorCreated){
        console.log("errorCreated:", errorCreated)
        console.log("errorProfile:", errorProfile)
    }
    return (
        <>
            <title>
                Perfil | UdeAcercate
            </title>
            <div className='Yellow-little gap-15 flex flex-col h-screen'>
                <div>
                    <Navbar/>
                </div>

                <div className=' h-full flex flex-row'>
                    <div className=' w-1/3 flex flex-col items-center p-4 gap-4'>
                        <Image src={user?.image!} alt={'avatar-image'} height={200} width={200} className=' rounded-full' />
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
                    <div className=' w-full'>
                        <div className=' w-full p-4 grid grid-cols-2 gap-4 justify-items-center'>
                            <button className=
                                {eventType === 'created'
                                    ? ' ButtonCard  flex items-center h-14 w-60 justify-center'
                                    : ' border-2 flex items-center h-14 w-60 justify-center'}
                                onClick={setCreatedType}>
                                Eventos Creados
                            </button>
                            <button className=
                                {eventType === 'attending'
                                    ? ' ButtonCard  flex items-center h-14 w-60 justify-center'
                                    : ' border-2 flex items-center h-14 w-60 justify-center'}
                                onClick={setAttendingType}>
                                Eventos a asistir
                            </button>
                        </div>
                        <div>
                            <MiniCardContainer data=
                                {eventType === 'created'
                                    ? eventsCreatedData?.eventsCreated
                                    : eventsAttendingData?.eventsAttending}
                                sessionUserId={userData?.user.id}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Perfil