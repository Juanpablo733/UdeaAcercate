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
import InfoProfile from '@/components/profile/InfoProfile';
import { CgProfile } from "react-icons/cg";
import { LuCalendarRange } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";


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
    const setProfileType = async () => {
        setEventType('profile')
    }
    if(errorProfile || errorCreated){
        console.log("errorCreated:", errorCreated)
        console.log("errorProfile:", errorProfile)
    }
    console.log('profile: ', profile)
    console.log('user: ', user)
    return (
        <>
            <title>
                Perfil | UdeAcercate
            </title>
            <div className='Yellow-little gap-15 flex flex-col min-h-screen'>
                <Navbar/>   
                <main className='flex flex-col sm:flex-row mt-16 gap-8'>
                    <section className='flex flex-col sm:hidden debug bg-[var(--green-hard)] items-center justify-center pb-4'>
                        <div className='flex items-center gap-4'>
                            <Image src={user?.image!} alt={'avatar-image'} height={80} width={80} className=' rounded-full'/>
                            <div className='flex flex-col'>
                                <span className='text-lg text-center font-extrabold text-white'>{profile.user?.name}</span>
                                <span className='text-base font-semibold text-white'>{profile?.career}</span>
                            </div>
                        </div>
                        <div className='flex gap-4 text-white'>
                            <div className='flex flex-col items-center'>
                                <span className='font-bold text-3xl'>1</span>
                                <span>Eventos organizados</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='font-bold text-3xl'>2</span>
                                <span>Eventos a asistir</span>
                            </div>
                        </div>
                    </section>
                    <section className='hidden sm:flex flex-col items-center p-4 gap-5'>
                        <Image src={user?.image!} alt={'avatar-image'} height={200} width={200} className=' rounded-full'/>
                        <span className='text-xl font-extrabold'>{profile.user?.name}</span>
                        <span className='text-base font-semibold'>{profile?.career}</span>
                        <div className='flex flex-col gap-4 justify-center'>
                            <button className=
                                {eventType === 'created'
                                    ? ' ButtonCard flex items-center h-14 w-50 justify-center lg:w-52'
                                    : ' border-2 border-gray-400 bg-gray-200 rounded-2xl flex items-center h-14 w-50 lg:w-52 justify-center text-base font-bold'}
                                onClick={setCreatedType}>
                                Eventos Creados
                            </button>
                            <button className=
                                {eventType === 'attending'
                                    ? ' ButtonCard flex items-center h-14 w-50 justify-center lg:w-52'
                                    : ' border-2 border-gray-400 bg-gray-200 rounded-2xl flex items-center h-14 w-50 lg:w-52 justify-center text-base font-bold'}
                                onClick={setAttendingType}>
                                Eventos a asistir
                            </button>
                            <button className=
                                {eventType === 'profile'
                                    ? ' ButtonCard flex items-center h-14 w-50 justify-center lg:w-52'
                                    : ' border-2 border-gray-400 bg-gray-200 rounded-2xl flex items-center h-14 w-50 lg:w-52 justify-center text-base font-bold'}
                                onClick={setProfileType}>
                                Perfil
                            </button>
                        </div>
                    </section>
                    <div className='flex sm:hidden debug items-center justify-center'>
                        <button onClick={setProfileType}>
                            <CgProfile/>    
                        </button>
                        <button onClick={setAttendingType}>
                            <LuCalendarRange/>
                        </button>
                        <button onClick={setCreatedType}>
                            <LuCalendarCheck/>
                        </button>
                    </div>
                    <section className='w-full'>
                            {
                                eventType === 'profile'
                                ? <InfoProfile profile={profile}/>
                                :
                                <MiniCardContainer data=
                                    {eventType === 'created'
                                        ? eventsCreatedData?.eventsCreated
                                        : eventsAttendingData?.eventsAttending}
                                    sessionUserId={userData?.user.id}
                                />
                            }
                    </section>
                </main>
            </div>
        </>
    )
}

export default Perfil